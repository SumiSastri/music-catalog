import React from 'react';
import { Container } from 'reactstrap';

import ToDoHeader from './ToDoHeader';

function ToDoIndexPage() {
	return (
		<Container>
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<ToDoHeader />
			</div>
		</Container>
	);
}

export default ToDoIndexPage;
