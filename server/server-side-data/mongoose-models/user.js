const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	createdDate: {
		type: Date,
		default: Date.now
	},
	username: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: false,
		unique: true
	},
	image: {
		type: String,
		required: false
	},
	password: {
		type: String,
		required: true
	},
	userType: {
		type: Array,
		required: false
	},
	actionRequired: {
		type: Boolean,
		required: false
	}
});

module.exports = mongoose.model('User', UserSchema);
// OR module.exports = MusicItem = mongoose.model('user', UserSchema);
