import { combineReducers } from 'redux';
import { blogReducers } from './blogReducers';

export default combineReducers({
	// this is the state tree an object not the array (blogs) which is one of the key-values of the state-tree
	blogPosts: blogReducers
});
