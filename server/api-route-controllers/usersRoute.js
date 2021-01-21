// libraries
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

const User = require('../server-side-data/mongoose-models/userSchema');

// @POST/route      /users-api'
// @desc            register - VALIDATE ENCRYPT & CREATE
// @methods         MONGOOSE: findOne()
//                  BCRYPTJS: genSalt()/ hash()

// ONLY PUBLIC ROUTE FOR USERS
router.post('/', (req, res) => {
	let { username, email, password, image, userType } = req.body;

	// VALIDATE MANDATORY FIELDS - error 400 bad request in header
	if (!username || !password || !email) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}

	// VALIDATE UNIQUE USER
	User.findOne({ email }).then((savedUser) => {
		if (savedUser) {
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
					jwt.sign({ id: savedUser.id }, config.get('jwtSecret'), { expiresIn: 3600 }, (err, bearerToken) => {
						if (err) throw err;
						// JREFACTOR FOR JWT - DROP TOKEN IN RESPONSE
						res.json({
							bearerToken,
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

module.exports = router;

// TESTs
// @GET/route       '/users-api' PUBLIC
// @desc            fetch savedUsers in dB
// @methods         EXPRESS-ROUTER router.get()

// TEST - configuration
// router.get('/', (req, res) => {
// 	res.send('user route working');
// });

// // TEST - get all users
// router.get('/', async (req, res) => {
// 	try {
// 		const savedUsers = await User.find();
// 		if (!savedUsers) throw Error('No users exist');
// 		res.json(savedUsers);
// 	} catch (e) {
// 		res.status(400).json({ msg: e.message });
// 	}
// });

// TEST @PUT/route       '/login/users-api'/:id'
// @desc             authorised/authenticated users can update details

// router.put('/:id', (req, res, next) => {
// 	User.findByIdAndUpdate({ _id: req.params.id }, req.body, {
// 		new: true,
// 		useFindAndModify: false
// 	})
// 		.then(function(userFound) {
// 			res.send(userFound);
// 		})
// 		.catch((err) => res.status(404).json({ message: err }));
// });

// TEST @DELETE/route    '/login/users-api':id'
// @desc             authorised/authenticated users can delete details

// router.delete('/:id', (req, res, next) => {
// 	User.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false })
// 		.then(function(userFound) {
// 			res.send(userFound);
// 		})
// 		.catch((err) => res.status(422).json({ message: err }));
// });
