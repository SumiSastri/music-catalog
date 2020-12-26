// libraries
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// mongoose models need to be imported
const MusicItem = require('../server-side-data/mongoose-models/musicItem.js');

// I find express router easier than the app.route() option with vanilla express

// @GET/route '/music-inventory-api' PUBLIC NOT AUTHENTICATED ROUTE (DISPLAYDATA-GET)
// @desc fetch & read info from dB
// @methods mongoose schema constructor with the .find()/ .sort(), etc. chained

router.get('/', (req, res) => {
	MusicItem.find().sort({ name: +1 }).then((items) => res.json(items));
	res.end();
});

// @POST/route '/music-inventory-api' PUBLIC NOT AUTHENTICATED ROUTE (CREATE-POST)
// @desc get user update from FE and write data to db
// @methods mongoose schema constructor assigned to the payload/or post params/ or API request body
// the request body is in JSON the payload saved, converted to json if a 200 response rcvd if not errors caught

router.post('/', (req, res, next) => {
	let { name, condition, valueInUSD } = req.body;
	let musicItemPayload = new MusicItem({
		name,
		condition,
		valueInUSD
	});
	console.log('name:', req.body);
	console.log('music-item:', musicItemPayload);
	next();
	musicItemPayload
		.save()
		.then((savedItem) => res.status(200).json(savedItem))
		.catch((err) => res.status(422).json({ message: err }));
	res.end();
});

// @PUT/route '/music-inventory-api/:id' PUBLIC NOT AUTHENTICATED ROUTE (UPDATE-PUT)
// @desc get user update from FE and write data to db
// @methods mongoose schema constructor chains mongoose method findByIdAndUpdate() to the
// HTTP response body, then sends this response that has been found by the request body to the db

router.put('/:id', (req, res, next) => {
	MusicItem.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	})
		.then(function(foundItemByIdToUpdate) {
			res.send(foundItemByIdToUpdate);
		})
		.catch((err) => res.status(404).json({ message: err }));
	res.end();
});

// @DELETE/route ' /music-inventory-api/:id' PUBLIC NOT AUTHENTICATED ROUTE (DELETE-DELETE)
// @desc get user request to delete item from FE and permanently delete from db - can not be undone
// @methods mongoose schema constructor chains mongoose methods findByIdAndRemove()
// then sends the response body back to db
router.delete('/:id', (req, res, next) => {
	MusicItem.findByIdAndRemove({ _id: req.params.id }, req.body, { useFindAndModify: false })
		.then(function(foundItemToDelete) {
			res.send(foundItemToDelete);
		})
		.catch((err) => res.status(422).json({ message: err }));
	res.end();
});

module.exports = router;
// in es6 export default router
