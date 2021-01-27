import React from 'react';
import { Container } from 'reactstrap';
// Redux refactor
import { connect } from 'react-redux';
import { deleteToDoItem } from '../toDos-actions/async-toDo-action-creators';

import '../../toDos-styles/toDoListStyles.css';
import ToDosCard from './ToDosCard';
import ToDosCompleted from './ToDosCompleted';

const ToDosList = ({ todosArray = [], deleteToDoItem }) => {
	const displayToDos = todosArray.length ? (
		todosArray.map((toDoItem, i) => {
			return (
				<div className="list-wrapper" key={todosArray[i].id}>
					<ToDosCard
						deleteToDoItem={deleteToDoItem}
						id={todosArray[i].id}
						title={todosArray[i].title}
						completed={todosArray[i].completed}
					/>
				</div>
			);
		})
	) : (
		<ToDosCompleted />
	);

	return (
		<div>
			<Container />
			<div className="list-wrapper">{displayToDos}</div>
			<Container />
		</div>
	);
};

const mapStateToProps = (state) => ({
	todosArray: state.todosArray
});

export default connect(mapStateToProps, { deleteToDoItem })(ToDosList);
