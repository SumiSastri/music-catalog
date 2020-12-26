import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/music-section-action-type-constants';

// static data removed and loading added
const initialState = {
	items: [],
	loading: false
};

//  change id of uuid to _id
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state,
				items: action.payload,
				loading: false
			};
		case DELETE_ITEM:
			return {
				...state,
				items: state.items.filter((item) => item._id !== action.payload)
			};
		case ADD_ITEM:
			return {
				...state,
				items: [ action.payload, ...state.items ]
			};
		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			};

		default:
			return state;
	}
}
