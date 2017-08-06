import React, { Component } from 'react';
import { Col, Grid } from 'react-bootstrap';
import './header.css';
import logo from '../img/logo4.png'
import TopNavbar from '../Views/TopNavbar';

class Header extends Component {
  render() {
    return (
      <header className="header-image">
        <Grid>
          <Col xs={12} md={3}>
          	<img height="70"  className="logo" alt="logo" src='http://agreedtechnologies.com/wp/wp-content/uploads/2015/11/Agreed-Tech-Logo_Logo-3.png' />
          </Col>
          <Col xs={12} md={9}>
          	<h2>
          	AgreedPredict
  	        <span style={{fontSize:13}}>
  	        <b>	  &#123; Analytics, Simulation, Visualization,Prediction and Reports of your Business &#125;</b>
          	</span>
          	</h2>
          </Col>
        </Grid>
      </header>
    );
  }
}

export default Header;
