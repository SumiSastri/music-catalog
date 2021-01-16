// REDUX REFACTOR : step 5 lift state out of component and set it in reducer
// // note the state tree is state.state or blogPosts.blogPosts
// if it is imported by a component as a prop it is blogPosts.blogPosts.props or
// state.state.props deconstructed as {blogPosts} = this.props

import { GET_BLOG_POSTS, LOAD_BLOG_POSTS } from '../blog-actions/BlogActionTypes';

const initialState = {
	blogPosts: [],
	loading: false
};

// a copy of initial state is made and only those changes requested passed to reducer
export default function(state = initialState, action) {
	switch (action.type) {
		// this is blogPosts array not blogs which is the state tree passed to root reducers
		// the actions now calling the data from api in the actions creators and imported
		// - payload is the response payload of api-call
		case GET_BLOG_POSTS:
			return {
				...state,
				blogPosts: action.payload
			};
		case LOAD_BLOG_POSTS:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
