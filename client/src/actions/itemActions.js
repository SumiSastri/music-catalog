import axios from 'axiso';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// read from store with action payload dispatched to store and api call back with promise of get
export const getItems = () => (dispatch) => {
	dispatch(setItemsLoading());
	axios.get('/music-inventory-api').then((res) =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		})
	);
};

// delete by id from store
export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id
	};
};

// write data to store with the payload of the item
export const addItem = (item) => {
	return {
		type: ADD_ITEM,
		payload: item
	};
};

// sends state of items loading to store
export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
