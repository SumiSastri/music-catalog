import axios from 'axios';
// async action creators for http-calls

import { GET_TODOS, CREATE_TODO, DELETE_TODO, LOAD_TODOS } from './constants/ToDoActionTypes';

export const getToDos = () => (dispatch) => {
	dispatch(loadToDos());
	axios.get('https://jsonplaceholder.typicode.com/todos').then((res) =>
		dispatch({
			type: GET_TODOS,
			payload: res.data.slice(0, 10)
		})
	);
};

// sends state of items loading to store
export const loadToDos = () => {
	return {
		type: LOAD_TODOS
	};
};

// Create
export const createTodoItem = (todoItem) => (dispatch) => {
	axios.post('https://jsonplaceholder.typicode.com/todos', todoItem).then((res) => {
		dispatch({
			type: CREATE_TODO,
			payload: res.data
		});
	});
};

// Delete
export const deleteToDoItem = (id) => (dispatch) => {
	axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
		dispatch({
			type: DELETE_TODO,
			payload: id
		})
	);
};
