// libraries
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// data and token validation
import config from '../../../config/default.json';
const { JWT_SECRET } = config;
const User = require('../../../server-side-data/mongoose-models/UserSchema');

// @POST/route      /users-api' - public anyone can register
// @desc            register - VALIDATE ENCRYPT & CREATE
// @methods         MONGOOSE: findOne()
// Encryptation     BCRYPTJS: genSalt()/ hash()

// Register route
router.post('/', (req, res) => {
	let { username, email, password } = req.body;

	// Validate mandatory fiels or send 400 bad request in header
	if (!username || !password || !email) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}

	// Validate unique user - if not unique send message to change email
	User.findOne({ email }).then((savedUser) => {
		if (savedUser) {
			return res.status(400).json({ msg: 'This email address is taken, please check your details' });
		}

		const newUserPayload = new User({
			username,
			email,
			password: hash
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
					jwt.sign({ id: savedUser.id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, authToken) => {
						if (err) throw err;
						// JREFACTOR FOR JWT - DROP TOKEN IN RESPONSE
						res.json({
							authToken,
							savedUser: {
								id: savedUser.id,
								username: savedUser.username,
								email: savedUser.email
							}
						});
					})
				);
			});
		});
	});
});
module.exports = router;
