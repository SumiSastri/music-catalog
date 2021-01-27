import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const ToDosHomeHooks = () => {
	<Container style={{ padding: '.5rem' }}>
		<h1>My Hip-Hop Organiser</h1>
		<Link to="/">
			<h4 color="secondary">Back to Home</h4>
		</Link>
	</Container>;
};
export default ToDosHomeHooks;
