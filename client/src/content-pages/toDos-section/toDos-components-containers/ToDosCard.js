import React from 'react';
import { Button, Container } from 'reactstrap';

// deleteToDoMethod passed from Home as a prop to List
// List passes this prop to Card in the card imported
// Consumed and fired as an onClick handler here - demo's prop drilling
const ToDosCard = ({ id, title, completed, deleteToDoItem }) => {
	return (
		<div key={id}>
			<Container className="p-1 bg-primary my-1 rounded bg-docs-transparent-grid ">
				<h4>
					<span>{completed}</span>
					<Button style={{ margin: '.5rem' }} color="info">
						Update
					</Button>
					{title}
					<span>
						{completed}
						<Button
							style={{ margin: '.5rem' }}
							color="danger"
							onClick={() => {
								deleteToDoItem(id);
							}}
						>
							Delete
						</Button>
					</span>
				</h4>
			</Container>
			<hr />
		</div>
	);
};
export default ToDosCard;