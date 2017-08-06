/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button, InputGroup, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './TopNavbar.css';

const views = {
	overall: {
		index: 1
	},
	renal: {
		index: 2
	},
	cardio: {
		index: 3
	},
	liver: {
		index: 4
	},
	respiratory: {
		index: 5
	},
	immune: {
		index: 6
	},
	hematological: {
		index: 7
	},
	endocrine: {
		index: 8
	},
	gastroIntestinal: {
		index: 9
	},
	neurological: {
		index: 10
	}
};
const navViews = {
	overview: {
		index: 1
	},
	patientview: {
		index: 2
	},
	reportingtool: {
		index: 3
	}
}

class TopNavbar extends Component {
	constructor(props) {
		super(props);
	}
							

	render() {
		return (
			<Navbar className= "bc" collapseOnSelect staticTop>
				<Navbar.Collapse>
					<Navbar.Header>
						<Navbar.Brand>
							<p>Navigation</p>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Nav onSelect={(key) => {this.props.selectNavView(key)}}>
						<LinkContainer to="/reportingtool?REPORT_ID=3"><NavItem eventKey={3}>Reporting Tool</NavItem></LinkContainer>
					</Nav>
					<Nav pullRight>
						
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default TopNavbar;