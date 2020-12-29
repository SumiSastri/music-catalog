import React from 'react';
import BlogCard from './BlogCard';

// parent of BlogCard, child of BlogIndex
// state from blog index passed to BlogIndex as props
// mapped through and populate props of each BlogCard

const BlogList = ({ blogs }) => {
	return (
		<div className="womens-garments-page">
			{blogs.map((blog, i) => {
				return <BlogCard key={i} id={blogs[i].id} body={blogs[i].body} title={blogs[i].title} />;
			})}
		</div>
	);
};

export default BlogList;
