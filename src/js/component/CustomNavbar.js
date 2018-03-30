"use restrict";

import React from 'react';
import {Navbar, NavItem, NavbarBrand, Nav, NavDropdown, MenuItem,  } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends React.Component{

    render(){
        return(
        <Navbar className="navbar-header" >
            <Navbar.Header>
                <Navbar.Brand >
                    <a href="#home"><Link to="/">Home</Link></a>
                </Navbar.Brand>
                <Navbar.Brand className="text-deco">
                    <a href="#home"><Link to="/">HOA</Link></a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} href="/about" to="/about">
                    About
                </NavItem>
                <NavItem eventKey={2} componentClass={Link}  href="/news" to="/news">
                    News
                </NavItem>
                <NavDropdown eventKey={3} title="Environment" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}><Link to="/about">PROD</Link></MenuItem>
                    <MenuItem eventKey={3.2}><Link to="/news">CERT</Link></MenuItem>
                    <MenuItem eventKey={3.3}><Link to="/about">QA</Link></MenuItem>
                    <MenuItem eventKey={3.4}><Link to="/news">DEV</Link></MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.5}>Separated link</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>

        )
    }
}