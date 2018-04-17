'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import CustomNavbar from './CustomNavbar';
import SearchMain from './SearchMain';

import '../../css/Home.css';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';


export default class Home extends React.Component {

    render(){
        console.log('Inside Home!!');
        return(
            <div className="main-wrapper">
                <Grid>
                    <Row>
                        <Col md={12}><Image src="../../../images/black-banner.png" className="header-image" /></Col>
                    </Row>
                    <Row>
                        <SearchMain/>
                    </Row>
                </Grid>
            </div>
        )
    }
}