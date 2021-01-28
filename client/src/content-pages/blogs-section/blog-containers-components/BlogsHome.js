import React, { Component } from 'react';
import { Spinner, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../../common/error-boundary/ErrorBoundary';
import BlogList from './BlogList';
import { getBlogPosts } from '../blog-actions/BlogActionCreators';

export class BlogsHome extends Component {
	componentDidMount() {
		this.props.getBlogPosts();
		console.log(`logs componentDidMount props`, this.props);
	}
	render() {
		const { blogPosts } = this.props.blogPosts;
		const { routerHistory } = this.props.history;
		//DEBUG THIS POINT OF FAILURE
		return !blogPosts.length ? (
			<div>
				<Container
					className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid"
					style={{ padding: '.5rem' }}
				>
					<h1>My Hip-Hop Blogs</h1>
					<Link to="/">
						<h4 color="secondary">Back to Home</h4>
					</Link>
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
						{/* Posts not rendering */}
						<BlogList blogPosts={blogPosts} routerHistory={routerHistory} />
					</ErrorBoundary>
				</Container>
			</div>
		);
	}
}
BlogsHome.propTypes = {
	getBlogPosts: PropTypes.func.isRequired,
	blogPosts: PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
	return {
		blogPosts: state.blogPosts
	};
};
export default connect(mapStateToProps, { getBlogPosts })(BlogsHome);
