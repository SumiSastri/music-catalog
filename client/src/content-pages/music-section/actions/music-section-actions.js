import axios from 'axios';

import {
	GET_MUSIC_ITEMS,
	ADD_MUSIC_ITEM,
	DELETE_MUSIC_ITEM,
	LOAD_MUSIC_ITEMS
} from './music-section-action-type-constants';

export const getMusicItems = () => (dispatch) => {
	dispatch(setMusicItemsLoading());
	axios.get('/music-inventory-api').then((res) =>
		dispatch({
			type: GET_MUSIC_ITEMS,
			payload: res.data
		})
	);
};
export const deleteMusicItem = (id) => (dispatch) => {
	axios.delete(`/music-inventory-api/${id}`).then((res) =>
		dispatch({
			type: DELETE_MUSIC_ITEM,
			payload: id
		})
	);
};
export const addMusicItem = (newMusicItem) => (dispatch) => {
	axios.post('/music-inventory-api', newMusicItem).then((res) => {
		dispatch({
			type: ADD_MUSIC_ITEM,
			payload: res.data
		});
	});
};
export const setMusicItemsLoading = () => {
	return {
		type: LOAD_MUSIC_ITEMS
	};
};
