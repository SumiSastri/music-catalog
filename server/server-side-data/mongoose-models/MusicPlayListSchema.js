const mongoose = require('mongoose');

const MusicPlayListSchema = new mongoose.Schema({
	entryDate: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: true
	},
	albumName: {
		type: String,
		required: false
	},
	image: {
		type: String,
		required: false
	},
	condition: {
		type: String,
		required: false
	},
	valueInUSD: {
		type: Number,
		required: false,
		default: 0
	},
	actionRequired: {
		type: Boolean,
		required: false
	}
});

module.exports = mongoose.model('MusicPlayList', MusicPlayListSchema);
// OR module.exports = MusicItem = mongoose.model('musicItem', MusicItemSchema);
