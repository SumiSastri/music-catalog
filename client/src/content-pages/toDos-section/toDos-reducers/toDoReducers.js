import { CREATE_TODO, DELETE_TODO } from '../toDos-actions/constants/ToDoActionTypes';

export const todosReducer = (state = [], action) => {
	const { type, payload } = action;
	// console.log('todosReducer', action);
	switch (type) {
		case CREATE_TODO: {
			// return the text property in payload
			const { item } = payload;
			const newToDoItem = {
				item,
				isCompleted: false
			};
			// concat does not mutate state
			return state.concat(newToDoItem);
		}
		case DELETE_TODO: {
			const { item } = payload;
			// find the exact match in the array and remove from payload going to the store
			return state.filter((todo) => todo.item !== item);
		}
		default:
			return state;
	}
};
