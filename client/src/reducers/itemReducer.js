import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

// static data removed and loading added
const initialState = {
	items: [],
	loading: false
};

// reducers get the actions from the store
// first returns original state (pristine)
// with the new action (touched) - with the actions payload from the api call (using axios as the http runner)
// get- react/ delete - filter and delete/ add - new payload items/ loading from false to true
// all these reducers are combined in the root reducer and sent back to store for the components to subscribe to them

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
				items: state.items.filter((item) => item.id !== action.payload)
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
