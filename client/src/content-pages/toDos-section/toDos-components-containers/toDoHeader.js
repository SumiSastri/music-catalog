import React from 'react';
import { Link } from 'react-router-dom';
// css library
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';

const ToDoHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">Get the show on the road</ToastHeader>
			<ToastBody>in-app organiser to sort out your next hip-hop adventure</ToastBody>
			<Link to="/hip-hop-organiser">
				<Button color="warning">Go to Organiser</Button>
			</Link>
		</Toast>
	);
};

export default ToDoHeader;
