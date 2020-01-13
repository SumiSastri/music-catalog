import { combineReducers } from ' redux';
import itemReducer from 'client/src/reducers/itemReducer.js';

export default combineREducers({
	item: itemReducer
});
