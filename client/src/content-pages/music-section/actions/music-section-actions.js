import axios from 'axios';

import {
	GET_MUSIC_ITEMS_FROM_API,
	CREATE_ADD_MUSIC_ITEM,
	UPDATE_EDIT_MUSIC_ITEM,
	DELETE_MUSIC_ITEM,
	LOAD_MUSIC_ITEMS_TOPAGE
} from '../actions/music-section-action-type-constants';

// getMusicItems is the action-creator that takes the dispatch function as its arg
// axios or fetch - first arg is the api HTTP call, the second is what happens to the payload
// dispatch - first arg is the action type, the second is the api-payload
export const getMusicItems = (musicItems) => (dispatch) => {
	dispatch(setMusicItemsToLoading(musicItems));
	axios.get('/music-inventory-api').then((res) =>
		dispatch({
			type: GET_MUSIC_ITEMS_FROM_API,
			payload: res.data
		})
	);
};

// sends state of items loading to store
export const setMusicItemsToLoading = () => {
	return {
		type: LOAD_MUSIC_ITEMS_TOPAGE
	};
};

// post - create/add
export const addMusicItem = (musicItem) => (dispatch) => {
	axios.post('/music-inventory-api', musicItem).then((res) => {
		dispatch({
			type: CREATE_ADD_MUSIC_ITEM,
			payload: res.data
		});
	});
};

// put- update/edit
export const updateOrEditMusicItem = (id) => (dispatch) => {
	axios.put(`/music-inventory-api/${id}`).then((res) =>
		dispatch({
			type: UPDATE_EDIT_MUSIC_ITEM,
			payload: id
		})
	);
};
// delete - delete
export const deleteMusicItem = (id) => (dispatch) => {
	axios.delete(`/music-inventory-api/${id}`).then((res) =>
		dispatch({
			type: DELETE_MUSIC_ITEM,
			payload: id
		})
	);
};
