import React from 'react';
import { Button, Container } from 'reactstrap';

// deleteToDoMethod passed from Home as a prop to List
// List passes this prop to Card in the card imported
// Consumed and fired as an onClick handler here - demo's prop drilling
const ToDosCard = ({ id, title, completed, deleteToDoItem }) => {
	return (
		<div key={id}>
			<p>{title}</p>
			<Container>
				<span>More to Do? {completed}</span>
				<Button color="info">Update</Button>
				<hr />
				<span>Completed? {completed}</span>
				<Button
					color="danger"
					onClick={() => {
						deleteToDoItem(id);
					}}
				>
					Delete
				</Button>
			</Container>
		</div>
	);
};
export default ToDosCard;
