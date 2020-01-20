import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

// read from store
export const getItems = () => {
	return {
		type: GET_ITEMS
	};
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
