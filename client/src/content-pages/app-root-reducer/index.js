import { combineReducers } from 'redux';
import musicItemsRootReducer from '../music-section/reducers/musicItemsRootReducer';
import shopRootReducer from '../shop-section/shop-reducers/shopRootReducer';

export default combineReducers({
	musicItems: musicItemsRootReducer,
	counterOne: shopRootReducer
});
