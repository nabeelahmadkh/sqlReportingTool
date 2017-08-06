/*jslint node: true, esversion:6 */
import React, { Component } from 'react';
import './BodyContainer.css';
import OrganSystemButtons from '../Views/OrganSystemButtons';
import OrganSystemDetailsView from '../Views/OrganSystemDetailsView';
import BodyView from '../Views/BodyView';
import { Col, Row, Grid } from 'react-bootstrap'; 
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
// import {Router, Route, browserHistory, IndexRoute} from "react-router";
import PatientContainer from './PatientContainer';
import OverviewContainer from './OverviewContainer';
import ReportingContainer from './ReportingContainer';
import AddReportContainer from './AddReportContainer';
import TopNavbar from '../Views/TopNavbar';
import _ from 'lodash/core';

class BodyContainer extends Component {
	constructor(props) {

		super(props);
		this.state = {
			organSystems: {
				renal: {
					name: 'Renal',
					status: 3
				},
				cardio: {
					name: 'Cardio',
					status: 3
				},
				liver: {
					name: 'Liver',
					status: 1
				},
				respiratory: {
					name: 'Respiratory',
					status: 1
				},
				immune: {
					name: 'Immune',
					status: 2
				},
				hematological: {
					name: 'Hematological',
					status: 2
				},
				endocrine: {
					name: 'Endocrine',
					status: 1
				},
				gastroIntestinal: {
					name: 'Gastro-Intestinal',
					status: 1
				},
				neurological: {
					name: 'Neurological',
					status: 1
				}
			},
			route: {
				selectedSystem: {
					index: 1
				},
				topNavBar: {
					index: 1
				},
				patientView: {
					index: 3
				}
			},
			search: '',
			copiedText: []
		};
		this.copyText = (text) => {
			this.setState((prevState, props) => {
				var copiedText = prevState.copiedText;
				copiedText.push(text);
				return {copiedText: copiedText};
			});
		};
  }
  selectPatientSystemView(key) {
  	var newRoute = _.extend({}, this.state.route);
  	newRoute.patientView.index = key;
  	this.setState({route: newRoute});
  }
  selectSystemView(key) {
		var newRoute = _.extend({}, this.state.route);
  	newRoute.selectedSystem.index = key;
  	this.setState({route: newRoute});
  }
  selectNavView(key) {
  	var newRoute = _.extend({}, this.state.route);
  	newRoute.topNavBar.index = key;
  	this.setState({route: newRoute});
  }
  handleSearch(text) {
  	var search = text || '';
  	
  	this.setState({search: search});
  }
  render() {
  	
		return (
			<Router>
					<div>
						<TopNavbar
							organSystems={this.state.organSystems} 
							selectSystemView={(key) => {this.selectSystemView(key)}}
							selectNavView={(key) => {this.selectNavView(key)}}
							route={this.state.route.topNavBar}
							handleSearch={(text) => this.handleSearch(text)}
						/>
						<Route path="/patientview" render={() => {

							return (
								<PatientContainer
									organSystems={this.state.organSystems}
									route={this.state.route.patientView}
								/>
							)
						}} />
						<Route path="/overview" render={() => {
							
							return (
								<OverviewContainer
									organSystems={this.state.organSystems}
									route={this.state.route.selectedSystem}

								/>
							)
						}}/>
						<Route path="/reportingtool" render={(match) => {
							
							return (
								<ReportingContainer
									search={this.state.search}
									copyText={(text) => {
										this.copyText(text);
									}}
									match={match}
								/>
							)
						}}/>

						<Route path="/addreport" render={() => {
							
							return (
								<AddReportContainer />
							)
						}}/>
					</div>
					
			</Router>
			
		);
  }
}


export default BodyContainer;