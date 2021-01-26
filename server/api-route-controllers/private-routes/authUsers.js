const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// FILES
// schema
const User = require('../../server-side-data/mongoose-models/userSchema');
// auth middle ware
const auth = require('../../auth-middleware/auth');

// REFACTOR - AUTH ADDED @POST/route      /login/users-api'
// @desc            login: CHECK USER DATA MATCHES THEN AUTHORISE
// @methods         MONGOOSE: findOne()
//                  BCRYPTJS: genSalt()/ hash() - compare()

router.post('/', (req, res) => {
	// let savedUser = User.find();
	let { email, password } = req.body;

	//  make sure both email and password entered
	if (!password || !email) {
		return res.status(400).json({ msg: 'Login needs both your email and password]' });
	}
	// make sure user is in the db - check via unique email
	User.findOne({ email }).then((savedUser) => {
		if (!savedUser) {
			return res.status(400).json({ msg: 'Check login details and try again' });
		}

		// check password match (:32)
		bcrypt.compare(password, savedUser.password).then((passwordMatch) => {
			if (!passwordMatch) return res.status(400).json({ msg: 'Login details not correct, try again' });

			// check jwt token match instead of sending password
			jwt.sign({ id: savedUser.id }, config.get('jwtSecret'), { expiresIn: 36000 }, (err, bearerToken) => {
				if (err) throw err;
				res.json({
					bearerToken,
					savedUser: {
						id: savedUser.id,
						username: savedUser.username,
						email: savedUser.email
					}
				});
			});
		});
	});
});

// AUTH ADDED @GET (:40) get all users
// @desc             authorised/authenticated users can update details
router.get('/user-api', auth, (req, res) => {
	User.findById(req.savedUser.id).select('-savedUser.password').then((savedUser) => res.json(savedUser));
});

// AUTH ADDED @PUT      '/login/users-api'/:id'
// @desc             authorised/authenticated users can update details

router.put('/:id', auth, (req, res, next) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	})
		.then(function(userFound) {
			res.send(userFound);
		})
		.catch((err) => res.status(404).json({ message: err }));
	// res.end();
});

// AUTH ADDED @DELETE/route    '/login/users-api':id'
router.delete('/:id', auth, (req, res, next) => {
	User.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false })
		.then(function(userFound) {
			res.send(userFound);
		})
		.catch((err) => res.status(422).json({ message: err }));
});
module.exports = router;
// in es6 export default router
