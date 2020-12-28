import { combineReducers } from 'redux';
// import other reducers if there are any created
import musicItemsReducer from './musicItemsReducers';

export default combineReducers({
	// this is the state tree not the reducer state (musicItemsArray)
	musicItems: musicItemsReducer
});
