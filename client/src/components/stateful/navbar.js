import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import logo from '../../assets/logo.png';
import navImage from '../../assets/ilovehiphop.jpg';

class AppNavbar extends Component {
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
			height: '150px',
			width: '150px',
			position: 'top-right'
		};
		const navImageStyle = {
			height: '150px',
			width: '150px'
		};
		const navTextStyle = {
			fontSize: '45px',
			textAlign: 'center'
		};
		return (
			<div>
				<Navbar color="light" expand="sm" className="mb-t">
					<Container>
						<div className="logo-container">
							<img style={logoStyle} alt={'logo'} src={logo} />
						</div>
						<div>
							<h2 style={navTextStyle}> A MERN Stack app with React-Redux</h2>
						</div>
						<NavbarToggler onClick={this.toggle}>
							<h6>Click to Login</h6>
						</NavbarToggler>
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar />
							<NavItem>
								<NavLink href="/">Register</NavLink>
								<NavLink href="/">Log-in</NavLink>
								<NavLink href="/">Log-out</NavLink>
							</NavItem>
						</Collapse>
					</Container>
					<NavbarBrand className="nav-image-container">
						<img style={navImageStyle} alt={'nav-image'} src={navImage} />
					</NavbarBrand>
				</Navbar>
			</div>
		);
	}
}

export default AppNavbar;
