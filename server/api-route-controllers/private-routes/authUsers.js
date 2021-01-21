// libraries
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// REFACTOR FOR PRIVATE ROUTES - authorise user match all fields with those in db
const config = require('config');
const jwt = require('jsonwebtoken');

// files
const User = require('../private-routes/authUsers');

// @POST/route      /login/users-api'
// @desc            login: CHECK USER DATA MATCHES THEN AUTHORISE
// @methods         MONGOOSE: findOne()
//                  BCRYPTJS: genSalt()/ hash() - compare()

router.post('/', (req, res) => {
	let { email, password } = req.body;
	if (!password || !email) {
		return res.status(400).json({ msg: 'Login needs both your email and password' });
	}

	// Check user match from user saved in db (savedUser object)
	User.findOne({ email }).then((savedUser) => {
		if (!savedUser) {
			return res.status(400).json({ msg: 'Login details do not match' });
		}
		// check password match
		bcrypt.compare(password, savedUser.password).then((passwordMatch) => {
			if (!passwordMatch) return res.status(400).json({ msg: 'Login not valid please try again' });

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
