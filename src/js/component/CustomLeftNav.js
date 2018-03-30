/**
 * Created by RBhatnagar on 3/29/2018.
 */

"use strict";

import React from 'react';

export default class CustomLeftNav extends React.Component {
    render(){
        return(
            <div className="fixed-230 filter-container bgcolor-white" data-leftnav="comp">
                <div className="hidden-desktop bgcolor-att-functional-bg-gray ">
                    <div className="span12">
                        <div className="container">
                            <h1 className="marginLeft-30 no-margin category-headingPad">Showing <strong>60</strong> results for <strong>"Charger"</strong></h1>
                            <div className="form-row no-margin">
                                <label htmlFor="filter">Filtered by:</label>
                                <div className="span12">
                                    <select className="awd-select" id="filter" name="filter">
                                        <option value="" data-default-placeholder="true" >Select</option>
                                        <option value="op1a">Support</option>
                                        <option value="op2a">Shop</option>
                                        <option value="op2a">AT&amp;T news</option>
                                        <option value="op2a">myAT&amp;T account</option>
                                        <option value="op2a">Developer resources</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                        <div className="span12 paddBottom15 paddTop5">
                            <div className="container">
                                <a href="#" className="heading-small-content-emphasis ">Choose more filter</a>
                            </div>
                        </div>

                    </div>
                    <hr className="lite no-margin" />
                </div>

                <div className="fluid-space visible-desktop">
                    <div className="row ">
                        <div className="span12">
                            <div className="marginLeft20">
                                <h2 className="heading-medium marginTopBottom16">Filter Options</h2>
                                <hr className="lite no-margin" />

                                <ul className="marginTopBottom16 filter-category">
                                    <li><a href="#" className="color-att-digital-black"><strong>Shop</strong></a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">myAT&amp;T account</a></li>
                                    <li><a href="#">AT&amp;T news</a></li>
                                    <li><a href="#">Developer resources</a></li>
                                </ul>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}