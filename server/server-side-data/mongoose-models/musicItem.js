const mongoose = require('mongoose');

const MusicItemSchema = new mongoose.Schema({
	entryDate: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		required: true
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

module.exports = mongoose.model('MusicItem', MusicItemSchema);
// OR module.exports = MusicItem = mongoose.model('musicItem', MusicItemSchema);
