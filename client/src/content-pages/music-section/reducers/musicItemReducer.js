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
export default function(state = initialState, action) {
	switch (action.type) {
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
				musicItems: [ ...state.musicItems, action.payload ]
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
