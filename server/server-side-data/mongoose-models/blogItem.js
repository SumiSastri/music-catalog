const mongoose = require('mongoose');

// images and videos can be stored as a buffer type
// how?
const BlogItemSchema = new mongoose.Schema({
	blogEntryDate: {
		type: Date,
		default: Date.now
	},
	blogTitle: {
		type: String,
		required: true
	},
	blogAuthor: {
		type: String,
		required: false
	},
	blogImage: {
		type: String,
		required: false
	},
	authorImage: {
		type: String,
		required: false
	},
	blogContent: {
		type: String,
		required: false
	},
	blogGenre: {
		type: Array,
		required: false
	},
	blogComments: {
		type: Array,
		required: false
	},
	blogRating: {
		type: Number,
		required: false
	}
});

module.exports = mongoose.model('blogItem', BlogItemSchema);
// OR module.exports = BlogItem = mongoose.model('blogItem', blogItemSchema);
