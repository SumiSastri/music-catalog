import { combineReducers } from 'redux';
// import other reducers if there are any created
import itemReducer from '../reducers/itemReducer';

export default combineReducers({
	item: itemReducer
});
