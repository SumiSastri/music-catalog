import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

// static data from stateful component moved to reducer
const initialState = {
	items: [ { id: uuid(), name: 'Maitre Gims' }, { id: uuid(), name: 'Yousoupha' }, { id: uuid(), name: 'DJ Khalid' } ]
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_ITEMS:
			return {
				...state
			};
		default:
			return state;
	}
}
