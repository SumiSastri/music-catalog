// libraries
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = require('../server-side-data/mongoose-models/userSchema.js');

// @GET/route       '/users-api' PUBLIC
// @desc            fetch & read info from dB
// @methods         semd test res[pmse]

router.get('/', (req, res) => {
	res.send('user route working');
});
//

// @POST/route      /users-api'
// @desc            VALIDATE ENCRYPT & CREATE

router.post('/', (req, res) => {
	let { username, email, password, image, userType, actionRequired } = req.body;

	// VALIDATE MANDATORY FIELDS - error 400 bad request in header
	if (!username || !password || !email) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}

	// VALIDATE UNIQUE USER
	User.findOne({ email }).then((existingUser) => {
		if (existingUser) {
			return res.status(400).json({ msg: 'Please select another user name, this one is taken' });
		}

		let newUserPayload = new User({
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
					res.status(200).json({
						savedUser: {
							id: savedUser.id,
							username: savedUser.username,
							email: savedUser.email,
							image: savedUser.image,
							userType: savedUser.userType
						}
					})
				);
			});
		});
	});
	// log to check again
	console.log('userName:', req.body);
	console.log('password:', newUserPayload);
});

// @PUT/route       '/users-api/:id'
// @desc            get user by id and update partially filled form

router.put('/:id', (req, res, next) => {});

// @DELETE/route    '/users-api/:id'
// @desc            get user by id and delete permanantly

router.delete('/:id', (req, res, next) => {});

module.exports = router;
// in es6 export default router
