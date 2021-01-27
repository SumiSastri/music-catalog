import React from 'react';
import { Container } from 'reactstrap';

import '../toDos-styles/toDoListStyles.css';
import ToDosCard from './ToDosCard';
import ToDosCompleted from './ToDosCompleted';

const ToDosList = ({ toDosArray }) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachtoDoItem, i) => {
			return (
				<div className="list-wrapper" key={toDosArray[i].id}>
					<ToDosCard
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

export default ToDosList;
