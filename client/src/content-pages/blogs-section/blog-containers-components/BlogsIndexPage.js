import React, { Component } from 'react';
import { Container } from 'reactstrap';

import BlogHeader from './BlogHeader';

export class BlogsIndexPage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleClick() {}

	render() {
		return (
			<Container>
				<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
					<BlogHeader />
				</div>
			</Container>
		);
	}
}

export default BlogsIndexPage;
