import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {signOut} from "../../actions/signOutAction";

import {connect} from "react-redux";




const NavigationBar = (props) => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Restaurant Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav navbar-nav ml-auto">
                    <Nav.Link href="/managerMenu">Manager Menu</Nav.Link>
                    <Nav.Link href="/waiterMenu">Waiter Menu</Nav.Link>
                    <Nav.Link href="/chefMenu">Chef Menu</Nav.Link>
                    <Nav.Link onClick={() => {props.signOut()}}>
                        Log out
                    </Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};



export default connect(null, {signOut})(NavigationBar);