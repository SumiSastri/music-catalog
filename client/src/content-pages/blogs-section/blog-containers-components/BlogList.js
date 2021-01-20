import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BlogCard from './BlogCard';
// STEP 5: Check where state is used - as the name has changed - change it down the prop tree

const BlogList = ({ blogPosts, routerHistory }) => {
	const displayBlogList = blogPosts.map((eachBlogPost, i) => {
		return (
			<div
				key={blogPosts[i].id}
				routerHistory={routerHistory.match.params.id}
				className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid"
			>
				<Link to="/hip-hop-blogs/blogs_id">
					<BlogCard key={blogPosts[i].id} title={blogPosts[i].title} body={blogPosts[i].body} />
				</Link>
			</div>
		);
	});
	// if (true) {
	// 	throw new Error('An Error Has Occured Check your Code!');
	// }
	// UNCOMMENT CODE FOR PRODUCTION
	return <div>{displayBlogList}</div>;
};

export default withRouter(BlogList);
