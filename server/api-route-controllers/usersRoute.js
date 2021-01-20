// libraries
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
// REFACTOR FOR JWT
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../server-side-data/mongoose-models/userSchema.js');

// @GET/route       '/users-api' PUBLIC
// @desc            fetch & read info from dB
// @methods         send test response - check in Postman

router.get('/', (req, res) => {
	res.send('user route working');
});

// @POST/route      /users-api'
// @desc            VALIDATE ENCRYPT & CREATE
// @methods         findOne() Mongoose/ BCRYPTJS: genSalt()/ hash()

router.post('/', (req, res) => {
	let { username, email, password, image, userType } = req.body;

	// VALIDATE MANDATORY FIELDS - error 400 bad request in header
	if (!username || !password || !email) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}

	// VALIDATE UNIQUE USER
	User.findOne({ email }).then((existingUser) => {
		if (existingUser) {
			return res.status(400).json({ msg: 'This email address is taken, please check your details' });
		}

		const newUserPayload = new User({
			username,
			email,
			password,
			image,
			userType
		});

		// ENCRYPT PASSWORD WITH BCRYPT
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(newUserPayload.password, salt, (err, hash) => {
				if (err) throw err;
				newUserPayload.password = hash;
				// SAVE PAYLOAD WITH HASHED PASSWORD
				newUserPayload.save().then((savedUser) =>
					// ensure no password here
					// REFACTOR FOR JWT - SIGN TOKEN WITH USER ID
					jwt.sign({ id: savedUser.id }, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
						if (err) throw err;
						// JREFACTOR FOR JWT - DROP TOKEN IN RESPONSE
						res.json({
							token,
							savedUser: {
								id: savedUser.id,
								username: savedUser.username,
								email: savedUser.email,
								image: savedUser.image,
								userType: savedUser.userType
							}
						});
					})
				);
			});
		});
	});
});

// @PUT/route       '/users-api/:id'
// @desc            get user by id and update partially filled form

router.put('/:id', (req, res, next) => {});

// @DELETE/route    '/users-api/:id'
// @desc            get user by id and delete permanantly

router.delete('/:id', (req, res, next) => {});

module.exports = router;
// in es6 export default router
