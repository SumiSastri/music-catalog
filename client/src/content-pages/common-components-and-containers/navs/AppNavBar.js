import React, { Component } from 'react';

import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, NavItem, Jumbotron } from 'reactstrap';
import logo from '../../../assets/logo.png';
import AddNewUserModal from '../../users-section/users-components/reg-users/AddNewUserModal';
import LoginAuthUsersModal from '../../users-section/users-components/auth-users/LoginAuthUsersModal';
class AppNavBar extends Component {
	state = {
		isOpen: false
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() {
		const logoStyle = {
			height: '10em',
			width: 'auto',
			position: 'top-right'
		};

		return (
			<div>
				<Jumbotron>
					<Navbar color="light" expand="sm" className="mb5">
						<Container>
							<NavbarToggler onClick={this.toggle} />
							<Collapse isOpen={this.state.isOpen} navbar>
								<NavbarBrand href="/" className="nav-image-container">
									<div className="logo-container">
										<img style={logoStyle} alt={'logo'} src={logo} />
									</div>
								</NavbarBrand>
								<h2 className="text-muted">MERN-stack app with React-Redux</h2>
								<NavItem>
									<AddNewUserModal />
								</NavItem>
								<NavItem>
									<LoginAuthUsersModal />
								</NavItem>
							</Collapse>
						</Container>
					</Navbar>
				</Jumbotron>
			</div>
		);
	}
}

export default AppNavBar;
