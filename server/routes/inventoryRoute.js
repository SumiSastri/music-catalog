const express = require('express');
const router = express.Router();

// shift from server - import file into server
router.get('/music-inventory-api', (req, res) => {
	res.send('music-inventory-api route working');
});

// variable to get data model from db
// const MusicItem = require('file path of schema');

// sequence read - write - update - delete

// READ-DATA FROM DB-GET
// router.get('/music-inventory-api', (req, res) => {
// 	MusiItem.find().sort({ date: -1 }).then((items) => res.json(items));
// });

// CREATE/WRITE-DATA TO DB-POST
// router.post('/music-inventory-api', (req, res) => {
//  const newInventoryItem = new InventoryItem({
//  name: req.body.name
// })
// newMusicItem
// .save()
// .then(item => res.status(200).json(item))
// .catch(() => res.status(404).json({err: error-check}))
// });

// UPDATE-DATA IN DB BY FINDING ID-PUT
// router.put('music-inventory-api/:id', (req, res, next) => {
// 	InventoryItem.findByIdAndUpdate({ _id: req.params.id }, req.body, {
// 		new: true
// 	}).then(function(item) {
// 		res.send(item);
// 	});
// });

// DELETE-DATA FROM DB BY ID-DELETE
//  router.delete('music-inventory-api/:id', (req, res, next) => {
// 	InventoryItem.findByIdAndRemove({ _id: req.params.id })
// .then(() => res.status(200).json({success: id-correct}))
// .catch(() => res.status(404).json({success: check-id}))
// });

module.exports = router;
