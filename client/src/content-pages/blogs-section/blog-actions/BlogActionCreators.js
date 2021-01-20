import axios from 'axios';
import { GET_BLOG_POSTS, DELETE_BLOG_POST, LOAD_BLOG_POSTS } from './BlogActionTypes';

// REFACTOR TO REDUX curry the function to the dispatch method from redux
// dispatching the right method with 10 posts
export const getBlogPosts = () => (dispatch) => {
	dispatch(setBlogPostsLoading());
	axios.get(`http://jsonplaceholder.typicode.com/posts`).then((response) =>
		dispatch({
			type: GET_BLOG_POSTS,
			payload: response.data.slice(0, 10)
		})
	);
};

export const setBlogPostsLoading = () => {
	return {
		type: LOAD_BLOG_POSTS
	};
};
// REFACTOR TO REDUX - take the function out of the component and replace as above
// getPosts = () => {
// 	axios
// 		.get(`http://jsonplaceholder.typicode.com/posts`)
// 		.then((response) => {
// 			console.log(`logs api call - get response:`, response);
// 			this.setState({ blogs: response.data.slice(0, 4) });
// 			// this.setState({});
// 		})
// 		// check loading - uncomment the code and comment out the set-state above
// 		.catch((err) => this.setState({ errors: err.response.data.errors }));
// };
