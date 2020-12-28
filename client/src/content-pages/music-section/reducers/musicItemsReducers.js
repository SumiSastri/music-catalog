import {
	GET_MUSIC_ITEMS_FROM_API,
	CREATE_ADD_MUSIC_ITEM,
	UPDATE_EDIT_MUSIC_ITEM,
	DELETE_MUSIC_ITEM,
	LOAD_MUSIC_ITEMS_TOPAGE
} from '../actions/music-section-action-type-constants';

const initialState = {
	// initialState is the musicItems state object - so this is musicItems.musicItemsArray[]
	// this is an array of objects musicItemsArray and local reducer state
	musicItemsArray: [],
	loading: false
};

//  if you have set up fe with mock data or the uuid-library remove
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_MUSIC_ITEMS_FROM_API:
			return {
				...state,
				musicItemsArray: action.payload,
				loading: false
			};
		case LOAD_MUSIC_ITEMS_TOPAGE:
			return {
				...state,
				loading: true
			};
		case CREATE_ADD_MUSIC_ITEM:
			return {
				...state,
				musicItemsArray: [ action.payload, ...state.musicItemsArray ]
			};
		case UPDATE_EDIT_MUSIC_ITEM:
			return {
				...state,
				musicItemsArray: state.musicItemsArray.filter((musicItem) => musicItem._id == action.payload)
			};

		case DELETE_MUSIC_ITEM:
			return {
				...state,
				musicItemsArray: state.musicItemsArray.filter((musicItem) => musicItem._id !== action.payload)
			};

		default:
			return state;
	}
}
