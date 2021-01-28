import React, { Component } from 'react';

import { Collapse, Container, Nav, Navbar, NavbarToggler, NavbarBrand, NavItem, Jumbotron } from 'reactstrap';
import logo from '../../assets/logo.png';
import AddNewUserModal from '../users-section/users-components/reg-users/AddNewUserModal';
import LoginAuthUsersModal from '../users-section/users-components/auth-users/LoginAuthUsersModal';

class AppNavBar extends Component {
	state = {
		isOpen: false
	};
	// opens and closes nav bar
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	render() {
		const logoStyle = {
			height: '5em',
			width: 'auto',
			position: 'top-right',
			border: '4px dashed black'
		};

		return (
			<div>
				<Jumbotron>
					<Navbar color="light" expand="sm" className="mb5">
						<Container>
							<Nav className="ml-auto">
								<NavbarToggler onClick={this.toggle} />
								<Collapse isOpen={this.state.isOpen} navbar>
									<NavbarBrand href="/" className="nav-image-container">
										<div className="logo-container">
											<img style={logoStyle} alt={'logo'} src={logo} />
										</div>
									</NavbarBrand>
									<NavItem>
										<AddNewUserModal />
									</NavItem>
									<NavItem>
										<LoginAuthUsersModal />
									</NavItem>
								</Collapse>
							</Nav>
						</Container>
					</Navbar>
				</Jumbotron>
			</div>
		);
	}
}

export default AppNavBar;
