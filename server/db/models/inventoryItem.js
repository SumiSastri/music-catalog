const mongoose = require('mongoose');

const InventoryItemSchema = new mongoose.Schema({
	entryDate: {
		type: Date,
		default: Date.now
	},
	itemName: {
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
	value: {
		type: Number,
		required: false,
		default: 0
	},
	actionRequired: {
		type: Boolean,
		required: false
	}
});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);
