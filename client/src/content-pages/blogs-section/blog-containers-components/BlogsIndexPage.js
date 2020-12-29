import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, Container, Toast, ToastHeader, ToastBody } from 'reactstrap';

// parent created first - children take the props
// child - BlogList - grandchild - BlogCard
import BlogList from './BlogList';

export class BlogsIndexPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			blogs: []
		};
	}

	componentDidMount() {
		this.getPosts();
	}

	getPosts() {
		axios
			.get(`http://jsonplaceholder.typicode.com/posts`)
			.then((response) => {
				this.setState({ blogs: response.data });
			})
			.catch((err) => this.setState({ errors: err.response.data.errors }));
	}

	render() {
		const { blogs } = this.state;
		return !blogs ? (
			<Spinner color="danger" />
		) : (
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<Toast>
					<ToastHeader icon="primary">Hip-Hop Blog Posts</ToastHeader>
					<ToastBody>The latest hip-hop blogs and concert updates</ToastBody>
				</Toast>
			</div>
		);
	}
}

export default BlogsIndexPage;
