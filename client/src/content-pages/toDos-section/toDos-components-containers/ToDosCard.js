import React from 'react';
import { Button, Container } from 'reactstrap';

import { FormInputField } from '../../common-components-and-containers/forms/FormInputField';

// deleteToDoMethod passed from Home as a prop to List
// List passes this prop to Card in the card imported
// Consumed and fired as an onClick handler here - demo's prop drilling
const ToDosCard = ({ id, title, completed, deleteToDoItem }) => {
	return (
		<div key={id}>
			<Container className="p-1 bg-primary my-1 rounded bg-docs-transparent-grid ">
				<span>{completed}</span>
				<Button color="info">Update</Button>
				<FormInputField label="What I need to do next:" className="inpt-1l" name="title" value={title} />
				<span>{completed}</span>
				<Button
					color="danger"
					onClick={() => {
						deleteToDoItem(id);
					}}
				>
					Delete
				</Button>
			</Container>
			<hr />
		</div>
	);
};
export default ToDosCard;
