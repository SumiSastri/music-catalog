import React from 'react';
import { Button, Container } from 'reactstrap';

// Hooks - no changes
const ToDosCardHooks = ({ id, title, completed, deleteToDoItem }) => {
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
						<Button style={{ margin: '.5rem' }} color="warning">
							Done
						</Button>
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
export default ToDosCardHooks;
