import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

// Hooks - state in forms not in home
import ToDosListHooks from './ToDosListHooks';
import ToDosFormHooks from './ToDosFormHooks';

const ToDosHomeHooks = () => {
	<Container style={{ padding: '.5rem' }}>
		<h1>My Hip-Hop Organiser</h1>
		<Link to="/">
			<h4 color="secondary">Back to Home</h4>
		</Link>
		<ToDosFormHooks />
		<ToDosListHooks />
	</Container>;
};
export default ToDosHomeHooks;
