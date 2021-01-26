import { combineReducers } from 'redux';
import musicItemRootReducer from '../../content-pages/music-section/reducers/musicItemRootReducer';
import blogRootReducer from '../../content-pages/blogs-section/blog-reducers/blogRootReducer';
import toDosRootReducer from '../../content-pages/toDos-section/toDos-reducers/todosRootReducer';
export default combineReducers({
	musicItems: musicItemRootReducer,
	blogPosts: blogRootReducer,
	toDos: toDosRootReducer
});
