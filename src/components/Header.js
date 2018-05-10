import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class Header extends Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#brand">Cat Tinder</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem eventKey={1} href="#">
						Link
					</NavItem>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="#">
						Link Right
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default Header;
