// libraries
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// mongoose models need to be imported
const MusicPlayListItem = require('../server-side-data/mongoose-models/MusicPlayListSchema');

// @GET/route 	'/music-api' PUBLIC
// @desc 	    FETCH & READ
// @methods 	mongoose schema constructor with the .find()/ .sort(), etc. chained

router.get('/', (req, res) => {
	MusicPlayListItem.find()
		.sort({ name: +1, albumName: +1 })
		.then((items) => res.json(items))
		.catch((error) => res.send(error));
});
//

// @POST/route 	'/music-api' PUBLIC
// @desc 		CREATE
// @methods 	mongoose schema constructor assigned to the payload/or post params/ or API request body
// the request body is in JSON the payload saved, converted to json if a 200 response rcvd if not errors caught

router.post('/', (req, res) => {
	let { name, albumName, condition, valueInUSD } = req.body;
	let MusicPlayListItemPayload = new MusicItem({
		albumName,
		name,
		condition,
		valueInUSD
	});
	console.log('name:', req.body);
	console.log('music-item:', MusicPlayListItemPayload);
	MusicPlayListItemPayload.save()
		.then((savedItem) => res.status(200).json(savedItem))
		.catch((err) => res.status(422).json({ message: err }));
});

// @PUT/route '/music-api/:id' PUBLIC NOT AUTHENTICATED ROUTE (UPDATE-PUT)
// @desc get user update from FE and write data to db
// @methods mongoose schema constructor chains mongoose method findByIdAndUpdate() to the
// HTTP response body, then sends this response that has been found by the request body to the db
// req body required as it is sending a partially updated form

router.put('/:id', (req, res, next) => {
	MusicPlayListItem.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	})
		.then(function(itemFound) {
			res.send(itemFound);
		})
		.catch((err) => res.status(404).json({ message: err }));
	// res.end();
});

// @DELETE/route ' /music-api/:id' PUBLIC NOT AUTHENTICATED ROUTE (DELETE-DELETE)
// @desc get user request to delete item from FE and permanently delete from db - can not be undone
// @methods mongoose schema constructor chains mongoose methods findByIdAndRemove()
// then sends the response back - the body of the request not required as it is deleting by id

router.delete('/:id', (req, res, next) => {
	MusicPlayListItem.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false })
		.then(function(itemFound) {
			res.send(itemFound);
		})
		.catch((err) => res.status(422).json({ message: err }));
});

module.exports = router;
