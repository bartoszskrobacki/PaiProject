import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {signOut} from "../../actions/signOutAction";

import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logo from "../images/Logo.png"



const NavigationBar = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/login"><img src={logo} width="100px" /> Projekt inżynierski</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav navbar-nav ml-auto">

                    <Nav.Link onClick={() => {props.signOut()}}>
                        Wyloguj się
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};



export default connect(null, {signOut})(NavigationBar);

/*
                 <Nav.Link href="/managerMenu">Manager Menu</Nav.Link>
                 <Nav.Link href="/waiterMenu">Waiter Menu</Nav.Link>
                 <Nav.Link href="/chefMenu">Chef Menu</Nav.Link>
                 */