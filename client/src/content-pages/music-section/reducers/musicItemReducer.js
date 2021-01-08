import uuid from 'uuid';

import {
	GET_MUSIC_ITEMS,
	ADD_MUSIC_ITEM,
	DELETE_MUSIC_ITEM,
	LOAD_MUSIC_ITEMS
} from '../actions/music-section-action-type-constants';

// static data removed and loading added
const initialState = {
	musicItems: [
		{ id: uuid(), name: 'Maitre Gims' },
		{ id: uuid(), name: 'Yousoupha' },
		{ id: uuid(), name: 'DJ Khalid' }
	],
	loading: false
};

// action creators abstracted out of components and  imported back in to components
// data passed from components that import action creators to reducers via map state to store
// reducer defines initial state that is sent to store and update state via the action payload
// a copy of initial state is made and only those changes requested passed to reducer
export default function(state = initialState, action) {
	switch (action.type) {
		// this is the musicItems array not the state tree which is musicItem spread as state with musicItems and loading
		case GET_MUSIC_ITEMS:
			return {
				...state,
				musicItems: action.payload,
				loading: false
			};
		case DELETE_MUSIC_ITEM:
			return {
				...state,
				musicItems: state.musicItems.filter((musicItem) => musicItem._id !== action.payload)
			};
		case ADD_MUSIC_ITEM:
			return {
				...state,
				musicItems: [ action.payload, ...state.musicItems ]
			};
		case LOAD_MUSIC_ITEMS:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
