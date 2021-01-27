import React from 'react';
import { Container } from 'reactstrap';

import ToDoHeaderHooks from './ToDoHeaderHooks';
// no changes hooks
const ToDoIndexPageHooks = () => {
	return (
		<Container>
			<div className="p-3 bg-primary my-2 rounded bg-docs-transparent-grid">
				<ToDoHeaderHooks />
			</div>
		</Container>
	);
};

export default ToDoIndexPageHooks;
