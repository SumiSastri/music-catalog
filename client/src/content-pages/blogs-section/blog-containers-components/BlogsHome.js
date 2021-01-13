import React, { Component } from 'react';
import axios from 'axios';
import { Spinner, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
// REFACTOR TO REDUX
// import { connect } from 'react-redux';

// Error Boundary required to consume both BlogList and BlogCard
import ErrorBoundary from '../../common-components-and-containers/error-boundary/ErrorBoundary';
import BlogList from './BlogList';

export class BlogsHome extends Component {
	constructor(props) {
		super(props);
		console.log(`logs blogshome props`, this.props);
		this.state = {
			blogs: []
		};
	}
	// state is baked into the render method in the react library
	// in the life-cycle methods state is not bound to the component
	// binding state to the component is implicit with arrow functions
	// or as in this section bound with the ```this``` key word
	componentDidMount() {
		console.log(this.props);
		this.getPosts();
	}

	getPosts = () => {
		axios
			.get(`http://jsonplaceholder.typicode.com/posts`)
			.then((response) => {
				console.log(`logs get response:`, response);
				this.setState({ blogs: response.data.slice(0, 4) });
				// this.setState({});
			})
			// check loading - uncomment the code and comment out the set-state above
			.catch((err) => this.setState({ errors: err.response.data.errors }));
	};

	render() {
		// state is deconstructed in the render method not in the lifecycle or utility functions
		const { blogs } = this.state;
		console.log(blogs);
		// REFACTOR TO REDUX
		// const { blogs } = this.props;
		// console.log(this.props);
		return !blogs.length ? (
			<div>
				<Container>
					<Spinner color="danger" style={{ width: '3rem', height: '3rem' }} type="grow" />
					<p>Unable to find blogs, please try again later</p>
				</Container>
			</div>
		) : (
			<div>
				<Container
					className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid"
					style={{ padding: '.5rem' }}
				>
					<h1>My Hip-Hop Blogs</h1>
					<Link to="/">
						<h4 color="secondary">Back to Home</h4>
					</Link>
				</Container>
				<Container style={{ padding: '.5rem' }}>
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
export default BlogsHome;
