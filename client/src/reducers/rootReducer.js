import { combineReducers } from ' redux';
import itemReducer from 'client/src/reducers/itemReducer';

export default combineReducers({
	item: itemReducer
});
