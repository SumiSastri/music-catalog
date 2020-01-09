const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const MusicItem = require('../models/musicItem.js');

// READ-DATA FROM DB-GET

// shift from server - import file into server
router.get('/', (req, res) => {
	res.send('music-inventory-api route working');
});

// router.get('/', (req, res) => {
// 	MusicItem.find().sort({ date: -1 }).then((items) => res.json(items));
// });

// CREATE/WRITE-DATA TO DB-POST
router.post('/', (req, res) => {
	let { itemName, condition, valueInUSD } = req.body;
	let musicItemPayload = new MusicItem({
		itemName,
		condition,
		valueInUSD
	});
	console.log('itemName:', req.body);
	console.log('music-item:', musicItemPayload);
	musicItemPayload
		.save()
		.then((savedItem) => res.status(200).json(savedItem))
		.catch((err) => res.status(422).json({ message: err }));
});

// // UPDATE-DATA IN DB BY FINDING ID-PUT
router.put('/:id', (req, res, next) => {
	MusicItem.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	}).then(function(item) {
		res.send(item);
	});
});

// DELETE-DATA FROM DB BY ID-DELETE
router.delete('/:id', (req, res, next) => {
	MusicItem.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false }).then(function(item) {
		res.send(item);
	});
});

module.exports = router;
