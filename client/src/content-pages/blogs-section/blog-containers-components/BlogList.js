import React from 'react';
import BlogCard from './BlogCard';

// Parent jsx attribute passed props in BlogList
// Child BlogCard state passed down one more time via BlogCard attributes
const BlogList = ({ blogs }) => {
	// if (true) {
	// 	throw new Error('An Error Has Occured Check your Code!');
	// }
	// UNCOMMENT CODE FOR PRODUCTION
	return (
		<div>
			{blogs.map((blog, i) => {
				return <BlogCard key={i} id={blogs[i].id} title={blogs[i].title} body={blogs[i].body} />;
			})}
		</div>
	);
};

export default BlogList;
