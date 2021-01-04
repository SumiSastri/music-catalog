import React from 'react';
import { Container, Button } from 'reactstrap';

function ToDosListHeader() {
	return (
		<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
			<Container className="bg-info clearfix" style={{ padding: '.5rem' }}>
				<h1>My Hip-Hop Organiser</h1>
				<Button className="btn btn-secondary float-left">Add Stuff To Do</Button>
			</Container>
		</div>
	);
}

export default ToDosListHeader;
