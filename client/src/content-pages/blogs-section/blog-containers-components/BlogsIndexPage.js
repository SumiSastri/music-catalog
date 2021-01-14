import React, { Component } from 'react';
import { Container } from 'reactstrap';

import BlogHeader from './BlogHeader';

export class BlogsIndexPage extends Component {
	constructor(props) {
		super(props);
		console.log(` blog index props`, this.props);
		this.state = {};
	}

	render() {
		console.log(`blogs router history`, this.props.history);
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
