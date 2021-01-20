// libraries
const express = require('express');
const router = express.Router();
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
// @desc            get user update from FE and write data to db

router.post('/', (req, res) => {});

// @PUT/route       '/users-api/:id'
// @desc            get user by id and update partially filled form

router.put('/:id', (req, res, next) => {});

// @DELETE/route    '/users-api/:id'
// @desc            get user by id and delete permanantly

router.delete('/:id', (req, res, next) => {});

module.exports = router;
// in es6 export default router
