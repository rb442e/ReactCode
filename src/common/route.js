/**
 * Created by RBhatnagar on 3/30/2018.
 */

"use strict";

import News from '../js/component/News';
import Member from '../js/component/Member';
import Home from '../js/component/Home';
import Home1 from '../js/component/Home1';
import About from '../js/component/About';
import ActiveHealthHome from '../js/component/ActiveHealthHome';
import App from '../js/App.jsx';

const routes = [
    { path: '/', exact:true, component:Home },
    { path: '/about', component:About },
    { path: '/member',  component:Member },
    { path: '/news',  component:News },
    { path: '/spHome',  component:ActiveHealthHome }
];

export default routes;
