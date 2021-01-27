import React from 'react';
import { Container } from 'reactstrap';
// Redux refactor
import { connect } from 'react-redux';
import { deleteToDoItem } from '../toDos-actions/toDos-sync-actions/toDos-syncActions';
import '../../toDos-styles/toDoListStyles.css';
import ToDosCardHooks from './ToDosCardHooks';
import ToDosCompleted from '../../vanilla-react-redux/toDos-components-containers/ToDosCompleted';

// no hooks refactor
const ToDosList = ({ toDosArray = [], deleteToDoItem }) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachtoDoItem, i) => {
			return (
				<div className="list-wrapper" key={toDosArray[i].id}>
					<ToDosCardHooks
						deleteToDoItem={deleteToDoItem}
						id={toDosArray[i].id}
						title={toDosArray[i].title}
						completed={toDosArray[i].completed}
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

// redux refactor
const mapStateToProps = state({
	toDosArray: state.toDosArray
});
// function is written here and passed back to component as a prop
const mapDispatchToProps = (dispatch) => ({
	deleteToDoItem: (todoItem) => dispatch(deleteToDo(todoItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDosList);
