/**
 * Created by RBhatnagar on 3/30/2018.
 */

"use strict";

import React from 'react';
import '../css/App.css';
import News from '../js/component/News';
import HOA from '../js/component/HOA';
import Home from '../js/component/Home';
import About from '../js/component/About';
import App from '../js/App.jsx';

const routes = [
    { path: '/', component:Home },
    { path: '/about', component:About },
    { path: '/hoa',  component:HOA },
    { path: '/home',  component:Home },
    { path: '/spHome',  component:App }
];

export default routes;
