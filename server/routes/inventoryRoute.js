const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const MusicItem = require('../models/musicItem.js');

// READ-DATA FROM DB READ-GET

// shift from server - import file into server
// router.get('/', (req, res) => {
// 	res.send('music-inventory-api route working');
// });

router.get('/', (req, res) => {
	MusicItem.find().sort({ name: +1 }).then((items) => res.json(items));
});

// WRITE-DATA TO DB-CREATE-POST
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

// UPDATE-DATA BY FINDING ID-UPDATE-PUT
router.put('/:id', (req, res, next) => {
	MusicItem.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	}).then(function(item) {
		res.send(item);
	});
});

// DELETE-DATA BY FINDING ID DELETE-DELETE
router.delete('/:id', (req, res, next) => {
	MusicItem.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false }).then(function(item) {
		res.send(item);
	});
});

module.exports = router;
