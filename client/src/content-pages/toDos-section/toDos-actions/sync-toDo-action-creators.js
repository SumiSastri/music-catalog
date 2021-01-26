// async action creators for http-calls

import { CREATE_TODO, DELETE_TODO } from './constants/ToDoActionTypes';

// destructured JSON object is the function body
export const createToDoItem = (todoItem) => ({
	type: CREATE_TODO,
	payload: { todoItem }
});

// export const createToDoItem = () => (dispatch) => {({
// 	type: CREATE_TODO,
// 	payload: { todoItem }
// })
// };

export const deleteToDoItem = (todoItem) => ({
	type: DELETE_TODO,
	payload: { todoItem }
});
