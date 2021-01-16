import { combineReducers } from 'redux';
import musicItemRootReducer from '../music-section/reducers/musicItemRootReducer';
import blogRootReducer from '../blogs-section/blog-reducers/blogRootReducer';

export default combineReducers({
	musicItems: musicItemRootReducer,
	blogPosts: blogRootReducer
});
