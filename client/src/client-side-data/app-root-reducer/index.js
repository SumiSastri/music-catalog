import { combineReducers } from 'redux';
import musicItemRootReducer from '../../content-pages/music-section/reducers/musicItemRootReducer';
import blogRootReducer from '../../content-pages/blogs-section/blog-reducers/blogRootReducer';

export default combineReducers({
	musicItems: musicItemRootReducer,
	blogPosts: blogRootReducer
});
