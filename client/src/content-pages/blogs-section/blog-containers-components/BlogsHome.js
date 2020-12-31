import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, Container } from 'reactstrap';
// REFACTOR TO REDUX
// import { connect } from 'react-redux';

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
	// state is baked into the render method in the react library
	// in the life-cycle methods state is not bound to the component
	// binding state to the component is implicit with arrow functions
	// or as in this section bound with the ```this``` key word
	componentDidMount() {
		this.getPosts();
	}

	getPosts() {
		axios
			.get(`http://jsonplaceholder.typicode.com/posts`)
			.then((response) => {
				console.log(response);
				this.setState({ blogs: response.data.slice(0, 4) });
				// this.setState({});
			})
			// check loading - uncomment the code and comment out the set-state above
			.catch((err) => this.setState({ errors: err.response.data.errors }));
	}

	render() {
		// state is deconstructed in the render method not in the lifecycle or utility functions
		const { blogs } = this.state;
		console.log(blogs);
		// REFACTOR TO REDUX
		// const { blogs } = this.props;
		// console.log(this.props);
		return !blogs.length ? (
			<div className="p-3 bg-warning my-2 rounded bg-docs-transparent-grid">
				<Spinner color="danger" style={{ width: '3rem', height: '3rem' }} type="grow" />
				<p>Unable to find blogs, please try again later</p>
			</div>
		) : (
			<div>
				<Container>
					<ErrorBoundary>
						<BlogList blogs={blogs} />
					</ErrorBoundary>
				</Container>
			</div>
		);
	}
}
// REFACTOR TO REDUX
// const mapStateToProps = (state) => {
// 	return {
// 		blogs: state.blogs
// 	};
// };

// REFACTOR TO REDUX
// export default connect(mapStateToProps)(BlogHome);
export default BlogHome;
