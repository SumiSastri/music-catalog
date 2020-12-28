import { createStore } from 'redux';
import constants from './constants';
console.log('show constants', constants);

const initialState = {
	text: '',
	toDoItems: []
};

const reducer = (state = initialState, action) => {
	console.log('reducer', action);
	switch (action.type) {
		case constants.CHANGE_INPUT_TEXT:
			return Object.assign({}, state, { text: action.text });
		case constants.ADD_LIST_ITEM:
			return Object.assign({}, state, {
				toDoItems: state.items.concat(state.text),
				text: ''
			});
		case constants.DELETE_LIST_ITEM:
			// console.log('delete reducer working');
			const copyOfItems = state.toDoItems.slice();
			copyOfItems.splice(action.index, 1);
			return Object.assign({}, state, { toDoItems: copyOfItems });
		default:
			return state;
	}
};
