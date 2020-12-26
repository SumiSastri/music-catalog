import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/music-section-action-type-constants';

// dispatch get action to store & api-endpoint get response back from db to store
export const getItems = () => (dispatch) => {
	dispatch(setItemsLoading());
	axios.get('/music-inventory-api').then((res) =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		})
	);
};

// dispatch delete action to store & api-endpoint get response back from db to store
export const deleteItem = (id) => (dispatch) => {
	axios.delete(`/music-inventory-api/${id}`).then((res) =>
		dispatch({
			type: DELETE_ITEM,
			payload: id
		})
	);
};

// dispatch add action to store & api-endpoint get response back from db to store
export const addItem = (item) => (dispatch) => {
	axios.post('/music-inventory-api', item).then((res) => {
		dispatch({
			type: ADD_ITEM,
			payload: res.data
		});
	});
};

// sends state of items loading to store
export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};
