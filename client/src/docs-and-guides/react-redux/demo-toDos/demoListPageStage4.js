import ToDosCard from './ToDosCard';
import ToDosCompleted from './ToDosCompleted';

// imports mnethod of from the home page and passes on to card
// Not consumed as an onclick event here - merely passed to card component
const ToDosList = ({ toDosArray, deleteToDoItem }) => {
	const displayToDos = toDosArray.length ? (
		toDosArray.map((eachToDo, i) => {
			return <ToDosCard deleteToDoItem={deleteToDoItem} id={toDosArray[i].id} title={toDosArray[i].title} />;
		})
	) : (
		<ToDosCompleted />
	);

	return (
		<div>
			<Container />
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<h1>My Hip-Hop Organiser</h1>
				{displayToDos}
			</div>
			<Container />
		</div>
	);
};

export default ToDosList;
