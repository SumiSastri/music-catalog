// HOOKS REFACTOR
import React, { useState } from 'react';
// import React, { Component } from 'react';
// REDUX REFACTOR
import { connect } from 'react-redux';
// action creator
import { createToDoItem } from '../toDos-actions/toDos-sync-actions/toDos-actions';

// props now destructured and used as state.props here
// mapped dispatch function used as props
const ToDoFormHooks = ({ todosArray, handleSubmitNewTodo }) => {
	// handle submit written in the render method
	initialState = '';
	[ formInputs, setFormInputs ] = useState(initialState);
	handleChange = (event) => {
		setFormInputs(event.target.value);
	};

	return (
		<div name="id" id={todosArray.id}>
			<form
				onSubmit={() => {
					const isDuplicateTodo = todosArray.some((todoItem) => todoItem.title === inputValue);
					if (!isDuplicateTodo) {
						handleSubmitNewTodo(inputValue);
						setInputValue('');
					}
				}}
			>
				<input
					label="What I need to do next:"
					className="inpt-b1m"
					datatestid="inpt-create-to-do"
					name="title"
					placeholder="Add items here"
					type="text-area"
					value={formInputs}
					onChange={handleChange}
				/>

				<span name="title">{formInputs}</span>
				<span name="completed">{todosArray.completed}</span>
				<br />
				<span color="info">Create & Submit</span>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	todosArray: state.todosArray
});

const mapDispatchToProps = (dispatch) => ({
	handleSubmitNewTodo: (todoItem) => dispatch(createToDoItem(todoItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoFormHooks);
