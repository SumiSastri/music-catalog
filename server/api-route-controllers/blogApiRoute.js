const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// import schema
const BlogPost = require('../server-side-data/mongoose-models/BlogPostSchema');

// @route on server
// ('/blog-api', blogApiRoute);
// ids 'blog-api/:id'

router.get('/blog-api', (req, res) => {
	res.send('app blog route working');
});

// find all mongoose method
// router.get('/', (req, res) => {
// 	BlogPost.find().sort({ name: +1 }).then((posts) => res.json(posts)).catch((error) => res.send(error));
// });

// CREATE to /blog-api - add a post admin user
// you can add /comments if you want to post comments to a separate route
router.post('/blog-api', (req, res) => {
	let { blogTitle, blogAuthor, blogContent, blogImage, blogGenre, blogComments, blogRating } = req.body;
	let blogPostPayload = new BlogPost({
		blogTitle,
		blogAuthor,
		blogContent,
		blogImage,
		authorImage,
		blogGenre,
		blogComments,
		blogRating
	});
	console.log('blogTitle:', req.body);
	console.log('blog-item:', blogPostPayload);
	blogPostPayload
		.save()
		.then((savedBlogPost) => res.status(200).json(savedBlogPost))
		.catch((err) => res.status(422).json({ message: err }));
});

// UPDATE a blog by id
router.put('/blog-api/:id', (req, res, next) => {
	BlogPost.findByIdAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		useFindAndModify: false
	})
		.then(function([postFound) {
			res.send(postFound);
		})
		.catch((err) => res.status(404).json({ message: err }));
});

// DELETE by id
router.delete('blog-api/:id', (req, res, next) => {
	BlogPost.findByIdAndRemove({ _id: req.params.id }, { useFindAndModify: false })
		.then(function(postFound) {
			res.send(postFound);
		})
		.catch((err) => res.status(422).json({ message: err }));
});

module.exports = router;
