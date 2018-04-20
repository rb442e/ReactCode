/**
 * Created by RBhatnagar on 3/27/2018.
 */

"use strict";

import 'babel-polyfill';
require('es6-promise').polyfill();
import React from 'react';
import {Link} from 'react-router-dom';
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

        this.callApi(history.state.state);
    }

    componentWillReceiveProps(nextProps){

        if( this.props.location.state != nextProps.location.state){

            this.callApi(nextProps.location.state);
        }
    }

    componentDidCatch(error, info){
        console.log("Error: ", error);
    }

    callApi(memberPlanId){

        const restURL = `http://${Config.hostUrl}:${Config.port}${Config.mahServices.member}?app-id=${Config.appId}&q=${memberPlanId}`;
        returnData('fetchData', restURL).then((data) => this.setState({result: data}));
    }

    render(){
        return (
            <div>
                    <hr/>
                <Facts res={this.state.result} className="body"/>
                <hr/>
                <Grid><Col md="10"></Col>
                    <Col>
                    <Link to={{pathname: "memberDetails", state:this.state}}>Member Details</Link></Col></Grid>
            </div>
        )}
}
//const restURL = "http://localhost:4001/ahm/health-assessments?app-id=testing&q=1720874840";