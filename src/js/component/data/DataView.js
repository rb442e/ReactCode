/**
 * Created by RBhatnagar on 3/16/2018.
 */

import React from 'react';
import {Table, Grid, Col, Row  } from 'react-bootstrap';
import ReactJson from 'react-json-viewer';
import {Link} from 'react-router-dom';

export default function DataView(props) {
    var data = [];
    data = props.res;
    console.log("Rajeev Here...", props.res);
    return (
        <div>
            <Grid>
                <Row></Row>
                <Row>
                <Col md={2}></Col>
                <Col md={8}><ReactJson json={data}/></Col>
                <Col md={2}></Col>
                </Row>

            </Grid>
        </div>
    )
}