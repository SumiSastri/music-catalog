const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

// files - get schema
const User = require('../../server-side-data/mongoose-models/userSchema');

// REFACTOR FOR PRIVATE ROUTES

// @POST/route      /login/users-api'
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

			// check jwt token match
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

// @PUT/route       '/login/users-api'/:id'
// @desc             authorised/authenticated users can update details
router.put('/:id', (req, res, next) => {});

// @DELETE/route    '/login/users-api':id'
// @desc             authorised/authenticated users can delete details

router.delete('/:id', (req, res, next) => {});

module.exports = router;
// in es6 export default router
