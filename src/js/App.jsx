'use strict';

import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import News from './component/News';
import HOA from './component/HOA';
import CustomNavbar from './component/CustomNavbar';
import CustomLeftNav from './component/CustomLeftNav';

class App extends React.Component {

    render(){
        console.log("Inside the App render() function");
        return(
            <Router>
                <div>
                    <section className="main-wrapper">
                        <CustomNavbar/>
                        <div className="row row-block">
                            <CustomLeftNav/>
                                <div className="fluid-space no-pad">
                                    <section className="category" id="shop">
                                        <Route exact path="/" component={Home}/>
                                        <Route path="/about" component={About}/>
                                        <Route path="/news" component={HOA}/>
                                    </section>
                                </div>
                        </div>
                    </section>
                </div>
            </Router>
           )
       }
}

export default App;

