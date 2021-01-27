import { CREATE_TODO, DELETE_TODO } from '../toDos-actions/constants/ToDoActionTypes';

const initialState = { isLoading: false, todosArray: [] };

export const todosReducer = (state = initialState, action) => {
	const { type, payload } = action;
	// console.log('todosReducer', action);
	switch (type) {
		case CREATE_TODO: {
			// return the text property in the action payload
			const { todoItem } = payload;
			// concat does not mutate state
			return {
				...state,
				todosArray: state.todosArray.concat(todoItem)
			};
		}
		case DELETE_TODO: {
			const { toDoItem: todoItemFound } = payload;
			// find the exact match in the array and remove from payload going to the store
			return {
				...state,
				toDosArray: state.toDosArray.filter((filteredTodo) => filteredTodo.id !== todoItemFound.id)
			};
		}
		default:
			return state;
	}
};
