import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToDoHeader = (props) => {
	return (
		<Toast>
			<ToastHeader icon="primary">To Do List</ToastHeader>
			<ToastBody>Organise your work flow with this in-app to-do list</ToastBody>
		</Toast>
	);
};

export default ToDoHeader;
