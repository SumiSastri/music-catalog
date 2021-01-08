import React from 'react';
import { Container } from 'reactstrap';

import ToDosCard from './ToDosCard';
import ToDosCompleted from './ToDosCompleted';

// imports method of from the home page and passes on to card and form
// Not consumed as an onclick event here - merely passed to card component
const ToDosList = ({
	toDosArray,

	// methods of state passed down as props of state
	// lose the this key word as not bound to the toDosListComponent
	// the delete function is not consumed here but passed to card in the button
	deleteToDoItem
}) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachtoDoItem, i) => {
			return (
				<div key={toDosArray[i].id}>
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
		// displayToDos function - maps through the toDosArray
		// into the JSX tags in card and displays old and new items here
		<div>
			<Container />
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">{displayToDos}</div>
			<Container />
		</div>
	);
};

export default ToDosList;
