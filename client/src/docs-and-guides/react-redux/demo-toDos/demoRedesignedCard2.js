import React from 'react';
import { Button } from 'reactstrap';

// the design of this card has been changed again to show this card ui design is independent of the parent
// any events however are not
// in this redesign - the demo shows how props are passed from parent Home component
// down to list component - props need to be passed in the card component imported
// consumed by card component - the destructured prop method can now called here with the id param
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
