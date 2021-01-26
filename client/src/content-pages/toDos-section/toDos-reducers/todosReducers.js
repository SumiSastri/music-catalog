import { CREATE_TODO, DELETE_TODO } from '../toDos-actions/constants/ToDoActionTypes';

export const todosReducer = (state = [], action) => {
	const { type, payload } = action;
	// console.log('todosReducer', action);
	switch (type) {
		case CREATE_TODO: {
			// return the text property in the action payload
			const { todoItem } = payload;
			const addtodoItem = {
				todoItem,
				isCompleted: false
			};
			// concat does not mutate state
			return [ ...state, state.concat(addtodoItem) ];
		}
		case DELETE_TODO: {
			const { todoItem } = payload;
			// find the exact match in the array and remove from payload going to the store
			return [ ...state, state.filter((toDos) => toDos.todoItem !== todoItem) ];
		}
		default:
			return state;
	}
};
