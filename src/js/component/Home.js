'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './Home.css';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';


export default class Home extends React.Component {

    render(){
        console.log('Inside Home!!');
        return(
            <Grid>
                <Jumbotron className="jumbo-prop">
                    <h2>Welcome to dashboard</h2>
                    <p>This is where you find all important data for analysis.</p>
                    <Link to="/about">
                        <Button bsStyle="success">About</Button>
                    </Link>
                </Jumbotron>


            </Grid>

        )
    }

}