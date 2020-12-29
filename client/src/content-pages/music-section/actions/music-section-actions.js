import axios from 'axios';

import {
	GET_MUSIC_ITEMS_FROM_API,
	CREATE_ADD_MUSIC_ITEM,
	UPDATE_EDIT_MUSIC_ITEM,
	DELETE_MUSIC_ITEM,
	LOAD_MUSIC_ITEMS_TOPAGE
} from '../actions/music-section-action-type-constants';

// get and display info from API thunk allows the action creator to have side-effects
// you can fetch api's and receives the dispatch method as an arg
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
// this function called in the get & display call
// usually conditionally rendered in the component-container
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
