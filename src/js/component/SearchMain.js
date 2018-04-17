/**
 * Created by rbhatnagar on 4/12/2018.
 */

'use strict';

import React from 'react';
import {FormGroup, Button, FormControl, ControlLabel, HelpBlock, Grid, Row, Col} from 'react-bootstrap';
import {withRouter } from 'react-router-dom';

class SearchMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            memberPlanId: ''
        }
    }
    handleSubmit(e){
        const mid = this.state.memberPlanId;
        e.preventDefault();
        this.props.history.push('/member', mid);
    };

    render(){
        console.log('Inside SearchMain!!');
       return(
           <div>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <Grid>
                    <FormGroup controlId="formBasicText" >

                            <Row>
                            <Col md="4"></Col>
                                <Col md="4"><ControlLabel align="center"><h3>Enter Member Plan Id: </h3></ControlLabel></Col></Row>
                            <Row><Col md="3"></Col>
                                <Col md="5"><FormControl type="text" name="search" placeholder="Enter here..." onChange = {e => this.setState({memberPlanId: e.target.value})}/></Col></Row>
                        <FormControl.Feedback />
                    </FormGroup>
                    <Row><Col md="5"></Col>
                        <Col md="4"><Button bsStyle="primary" bsSize="large" type="submit">Search</Button></Col>
                        </Row></Grid>
                </form>
           </div>

        );
    }
}
export default withRouter(SearchMain);