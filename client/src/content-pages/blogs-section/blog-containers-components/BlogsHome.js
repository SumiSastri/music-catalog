import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, Container } from 'reactstrap';

// Error Boundary required to consume both BlogList and BlogCard
import ErrorBoundary from '../../common-components-and-containers/error-boundary/ErrorBoundary';
import BlogList from './BlogList';

export class BlogHome extends Component {
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
				console.log(response);
				// this.setState({ blogs: response.data.slice(0, 7) });
				this.setState({});
			})
			// check loading - uncomment the code and comment out the set-state above
			.catch((err) => this.setState({ errors: err.response.data.errors }));
	}

	render() {
		const { blogs } = this.state;
		console.log(blogs);
		return !blogs.length ? (
			<div className="p-3 bg-warning my-2 rounded bg-docs-transparent-grid">
				<Spinner color="danger" style={{ width: '3rem', height: '3rem' }} type="grow" />
				<p>Unable to find blogs, please try again later</p>
			</div>
		) : (
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<Container>
					<ErrorBoundary>
						<BlogList blogs={blogs} />
					</ErrorBoundary>
				</Container>
			</div>
		);
	}
}
export default BlogHome;
