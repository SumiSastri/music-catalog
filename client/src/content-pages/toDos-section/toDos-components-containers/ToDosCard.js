import React from 'react';
import { Button } from 'reactstrap';

// deleteToDoMethod passed from Home as a prop to List
// List passes this prop to Card in the card imported
// Consumed and fired as an onClick handler here - demo's prop drilling
const ToDosCard = ({ id, title, deleteToDoItem }) => {
	return (
		<div key={id}>
			<p>{title}</p>
			<div>
				<Button
					color="danger"
					onClick={() => {
						deleteToDoItem(id);
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};
export default ToDosCard;
