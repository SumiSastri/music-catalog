import React from 'react';
import { Spinner, Button } from 'reactstrap';

// Hooks - no changes
const ToDosCompletedHooks = () => {
	return (
		<div className="p-3 bg-warning my-2 rounded bg-docs-transparent-grid">
			<Spinner color="danger" style={{ width: '3rem', height: '3rem' }} type="grow" />
			<h2>All done - bookyaka!</h2>
			<Button color="success">Add more stuff to get done</Button>
		</div>
	);
};

export default ToDosCompletedHooks;
