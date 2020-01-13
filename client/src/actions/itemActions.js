import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from 'client/src/actions/types.js';

export const getItems = () => {
	return {
		type: GET_ITEMS
	};
};
