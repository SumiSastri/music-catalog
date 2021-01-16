// REDUX REFACTOR : step 5 lift state out of component and set it in reducer
// note the state tree is state.state or blogPosts.blogPosts
// if it is imported by a component as a prop it is blogPosts.blogPosts.props or
// state.state.props deconstructed as {blogPosts} = this.props
// hard-coded data removed with api-call

import { GET_BLOG_POSTS, LOAD_BLOG_POSTS } from '../blog-actions/BlogActionTypes';
import uuid from 'uuid';

const initialState = {
	blogPosts: [
		{
			id: uuid(),
			title: 'French Hip-Hop',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'
		},
		{
			id: uuid(),
			title: 'American Hip-Hop',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'
		},
		{
			id: uuid(),
			title: 'Tamil Hip-Hop',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur voluptate laborum perferendis, enim repellendus ipsam sunt autem at odit dolorum, voluptatum suscipit iste harum cum magni itaque animi laudantium fugiat'
		}
	],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
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
