// libraries
const express = require('express');
const router = express.Router();

const User = require('../server-side-data/mongoose-models/userSchema.js');

// @GET/route       '/users-api' PUBLIC
// @desc            fetch & read info from dB
// @methods         send test response - check in Postman

// router.get('/', (req, res) => {
// 	res.send('user route working');
// });

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		if (!users) throw Error('No users exist');
		res.json(users);
	} catch (e) {
		res.status(400).json({ msg: e.message });
	}
});

module.exports = router;
// in es6 export default router
