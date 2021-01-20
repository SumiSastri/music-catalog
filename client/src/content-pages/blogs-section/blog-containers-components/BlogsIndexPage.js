import React from 'react';
import { Container } from 'reactstrap';

import BlogHeader from './BlogHeader';

function BlogsIndexPage() {
	return (
		<Container>
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<BlogHeader />
			</div>
		</Container>
	);
}
export default BlogsIndexPage;
