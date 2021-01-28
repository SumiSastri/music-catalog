import React, { Fragment } from 'react';
import { NavLink } from 'reactstrap';

export const LogOutAuthUsers = () => {
	handleLogout = () => this.props.history.push('/');
	return (
		<Fragment>
			<NavLink
				onClick={() => {
					handleLogout;
				}}
			>
				Logout
			</NavLink>
		</Fragment>
	);
};

export default LogOutAuthUsers;
