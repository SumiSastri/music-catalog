import uuid from 'uuid';

import { GET_BLOG_POSTS, LOAD_BLOG_POSTS } from '../blog-actions/BlogActionTypes';

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
