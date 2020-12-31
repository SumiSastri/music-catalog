import React from 'react';
import BlogCard from './BlogCard';

// Parent jsx attribute passed props in BlogList
// Child BlogCard state passed down one more time via BlogCard attribute

const BlogList = ({ blogs }) => {
	const displayBlogList = blogs.map((blog, i) => {
		return (
			<div key={i} className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<BlogCard id={blogs[i].id} title={blogs[i].title} body={blogs[i].body} />
			</div>
		);
	});
	// if (true) {
	// 	throw new Error('An Error Has Occured Check your Code!');
	// }
	// UNCOMMENT CODE FOR PRODUCTION
	return <div>{displayBlogList}</div>;
};

export default BlogList;
