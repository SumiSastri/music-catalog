// destructured JSON object is the function body
export const CREATE_TODO = 'CREATE_TODO';
export const createToDoItem = (todoItem) => ({
	type: CREATE_TODO,
	payload: { todoItem }
});

export const DELETE_TODO = 'DELETE_TODO';
export const deleteToDoItem = (todoItem) => ({
	type: DELETE_TODO,
	payload: { todoItem }
});
