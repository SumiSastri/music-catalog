import React, { Component } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import logo from '../../../assets/logo.png';
import navImage from '../../../assets/ilovehiphop.jpg';
import AddNewUserModal from '../../users-section/users-components/users-forms-and-modals/AddNewUserModal';

class AppNavBar extends Component {
	state = {
		isOpen: false
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};
	// not on click event but it is on screen size change that happens within the browser
	// open state is when the nav bar changes into a hamburger menu
	// by default the hamburger is not shown as it is only shown when screen size changes
	// collapse allows you to add more links and makes the nav collapse into the hamburger
	// no constructor needed
	render() {
		const logoStyle = {
			height: '100px',
			width: 'auto',
			position: 'top-right'
		};
		const navImageStyle = {
			height: '75px',
			width: '75px'
		};
		const navTextStyle = {
			fontSize: '30px',
			textAlign: 'center',
			color: 'navy'
		};
		const navItemTextStyle = {
			fontSize: '15px',
			textAlign: 'center',
			color: 'white'
		};

		const navItemBoxStyle = {
			width: '20px'
		};
		// expand sm makes it responsive on small screens
		// container/ brand/ toggler/ collapse - this is the order
		// collapse does not need to be part of a nav bar
		// ml is margin left add nav bar as you can have navs without nav bars
		return (
			<div>
				<Navbar color="light" expand="sm" className="mb-t">
					<Container>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml auto" navbar>
								<NavbarBrand href="/" className="nav-image-container">
									<div className="logo-container">
										<img style={logoStyle} alt={'logo'} src={logo} />
									</div>
								</NavbarBrand>
								<div>
									<h2 style={navTextStyle}> A MERN Stack app with React-Redux</h2>
								</div>

								<NavbarBrand href="/" className="nav-image-container">
									<img style={navImageStyle} alt={'nav-pix'} src={navImage} />
								</NavbarBrand>
								<NavItem style={navItemBoxStyle}>
									<NavLink style={navItemTextStyle}>Register</NavLink>
									<AddNewUserModal />
									<NavLink style={navItemTextStyle}>Login</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default AppNavBar;
