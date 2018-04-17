/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";

import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
import {Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem, Grid,Col,Row } from 'react-bootstrap';
//import './HOA.css';
import Facts from './data/DataView';
import Config from '../../common/config.json';
import { returnData, setData } from '../../common/helper';


export default class Member extends React.Component {

    constructor(props) {
        super(props);

       this.state = {
            result: []
        }
    }

    componentWillMount() {

        console.log('componentWillMount');
        console.log('Config: ', Config.hostUrl );
        //const memberPlanId = this.props.location.state.memberPlanId;
        const memberPlanId = history.state.state;
        console.log('Hello Rajeev<<memberPlanId>>', memberPlanId);
        const restURL = `http://${Config.hostUrl}:${Config.port}${Config.healthAssessments}?app-id=${Config.appId}&q=${memberPlanId}`;
        //const restURL = "http://localhost:4001/ahm/health-assessments?app-id=testing&q=1720874840";
        //const restURL = "https://student-example-api.herokuapp.com/v1/facts";
        returnData('fetchData', restURL).then((data) => this.setState({result: data}));

    }

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){

        console.log('componentWillReceiveProps:  ', nextProps);

        if( this.props.location.state != nextProps.location.state){

            // make a new api call
            console.log('New prop');
            console.log('componentWillReceiveProps', nextProps.location.state);
            const memberPlanId = nextProps.location.state;
            console.log('Hello Rajeev<< WillReceivememberPlanId>>', memberPlanId);
            `http://${Config.hostUrl}:${Config.port}${Config.healthAssessments}?app-id=${Config.appId}&q=${memberPlanId}`;
            returnData('fetchData', restURL).then((data) => this.setState({result: data}));
        }

    }

    componentDidCatch(error, info){
        console.log("Error: ", error);
    }

    render(){
        return (
            <div>
                    <hr/>
                <Facts res={this.state.result} className="body"/>
            </div>
        )}
}
