import axios from 'axios';

import { GET_TODOS, CREATE_TODOS, UPDATE_TODO, DELETE_TODO, LOAD_TODOS } from './ToDoConstants';

export const getToDos = () => (dispatch) => {
	// dispatch(setItemsLoading());
	dispatch(getToDosFromAPI());
	axios
		.get('https://jsonplaceholder.typicode.com/todos')
		.then((response) => {
			// just get the id less expensive than getting all the api-data
			const toDoItems = response.data.slice(0, 5).map((toDoItem) => toDoItem.id);
			dispatch(successGetToDoIds(toDoItems));
			console.log(toDoItems);
		})
		.catch((error) => {
			dispatch(failedToGetToDoIds(`Error getting response data check url`, error.message));
		});
};

// sends state of items loading to store
export const loadToDos = () => {
	return {
		type: LOAD_TODOS
	};
};

// Create
export const createToDo = (item) => (dispatch) => {
	axios.post('https://jsonplaceholder.typicode.com/todos', item).then((res) => {
		dispatch({
			type: CREATE_TODOS,
			payload: res.data
		});
	});
};

export const updateToDo = (item) => (dispatch) => {
	axios.post(`https://jsonplaceholder.typicode.com/todos/${id}`, item).then((res) => {
		dispatch({
			type: UPDATE_TODO,
			payload: id
		});
	});
};

// Delete
export const deleteToDo = (id) => (dispatch) => {
	axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) =>
		dispatch({
			type: DELETE_TODO,
			payload: id
		})
	);
};
