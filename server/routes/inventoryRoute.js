// libraries
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// files
const MusicItem = require('../models/musicItem.js');

// ROUTES OR CONTROLLERS BACKEND

// READ-Data from Db/ use find method/ GET/ @route'/music-inventory-api'
router.get('/', (req, res) => {
	MusicItem.find().sort({ name: +1 }).then((items) => res.json(items));
});

// WRITE-Data to Db/ intantiate a constructor with payload-POST/ @route'/music-inventory-api'
router.post('/', (req, res) => {
	let { name, condition, valueInUSD } = req.body;
	let musicItemPayload = new MusicItem({
		name,
		condition,
		valueInUSD
	});
	console.log('name:', req.body);
	console.log('music-item:', musicItemPayload);
	musicItemPayload
		.save()
		.then((savedItem) => res.status(200).json(savedItem))
		.catch((err) => res.status(422).json({ message: err }));
});

// UPDATE-Db-data/ findByIdAndUpdate method-PUT @route '/music-inventory-api/:id'
router.put('/:id', (req, res, next) => {
	MusicItem.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	}).then(function(item) {
		res.send(item);
	});
});

// DELETE-Db-data/ findByIdAndRemove method-DELETE /music-inventory-api/:id
router.delete('/:id', (req, res, next) => {
	MusicItem.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false }).then(function(item) {
		res.send(item);
	});
});

module.exports = router;
