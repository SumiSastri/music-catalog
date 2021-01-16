import React, { Component } from 'react';
import { Spinner, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ErrorBoundary from '../../common-components-and-containers/error-boundary/ErrorBoundary';
import BlogList from './BlogList';

// STEP 5 - connect the action creators to the component and the reducer
import { getPosts } from '../blog-actions/BlogActionCreators';

export class BlogsHome extends Component {
	componentDidMount() {
		this.props.getPosts();
		console.log(`logs componentDidMount props`, getPosts);
		// STEP 6 DEBUG THIS POINT OF FAILURE
	}
	render() {
		// STEP 5: import state from the reducer now as a prop
		// the name has changed to identify it as different from the state tree
		const { blogPosts } = this.props;
		// const { blogs } = this.state;
		const routerHistory = this.props.history;
		console.log(`logs blogs router history`, this.props.history);
		console.log(`logs props of imported blogPosts from reducer`, this.props);
		// console.log('routerHistory', routerHistory);
		// step 5: array name changed in reducer - change here
		return !blogPosts.length ? (
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
						{/* state name changed STEP 5 Lifting state into reducer */}
						<BlogList blogPosts={blogPosts} routerHistory={routerHistory} />
					</ErrorBoundary>
				</Container>
			</div>
		);
	}
}

// STEP 5  - now map state to props
// we are mapping state.state.props
// the key of the state tree is blogposts.blogposts
// or state.state
// so this sets blogPosts.blogPosts (state.state) to the props of the state tree
// blogPosts = blogPosts:state.blogPosts
// the name is repeated 3 times

const mapStateToProps = (state) => {
	return {
		// replaces set-state
		blogPosts: state.blogPosts
	};
};

// moved to action-creators - this has to follow the mapStatetoProps
// const mapDispatchToProps = (dispatch) => { // dispatch an action payload}

export default connect(mapStateToProps, { getPosts })(BlogsHome);
// export default connect(BlogHome);
// export default BlogsHome;
