import axios from 'axios';

import {
	GET_MUSIC_ITEMS,
	ADD_MUSIC_ITEM,
	DELETE_MUSIC_ITEM,
	LOAD_MUSIC_ITEMS
} from './music-section-action-type-constants';

// get the data from the api then send the data to the page
// local storage does not work? fires a blank?
export const getMusicItems = () => (dispatch) => {
	dispatch(setMusicItemsLoading());
	axios.get('/music-inventory-api').then((res) =>
		dispatch({
			type: GET_MUSIC_ITEMS,
			payload: res.data
		})
	);
};
// dispatch delete action to store & api-endpoint get response back from db to store
export const deleteMusicItem = (id) => (dispatch) => {
	axios.delete(`/music-inventory-api/${id}`).then((res) =>
		dispatch({
			type: DELETE_MUSIC_ITEM,
			payload: id
		})
	);
};

// add music item - get the new music item created by the submit payload
// post this payload
export const addMusicItem = (newMusicItem) => (dispatch) => {
	axios.post('/music-inventory-api', newMusicItem).then((res) => {
		dispatch({
			type: ADD_MUSIC_ITEM,
			payload: res.data
		});
	});
};

// sends state of items loading to store
export const setMusicItemsLoading = () => {
	return {
		type: LOAD_MUSIC_ITEMS
	};
};
