import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "./editName.module.css";

import {connect} from "react-redux";


import {compose} from "redux";

import {firestoreConnect} from "react-redux-firebase";
import {signUpAction} from "../../actions/signUpAction";

const ManagerAddNewUser = props => {

    const [userState, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        role: "Chef",
        password: ""
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: ""
    });

    const InputHandler = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        delete errors[field];
        setState({...userState, [field] : value });
    };

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        //name validation

        if(!userState.firstName){
            formIsValid=false;
            errors['firstName'] =  "Couldn't be empty";
        }
        else if(userState.firstName !== "undefined"){
            if(!userState.firstName.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors['firstName'] =  "Only letters!";
            }
        }
        //category validation
        if(!userState.lastName){
            formIsValid=false;
            errors['lastName'] = "Couldn't be empty";
        }
        else if(userState.lastName !== "undefined"){
            if(!userState.lastName.match(/^[a-zA-Z]+$/)){
                formIsValid = false;
                errors['lastName']= "Only numbers!";
            }
        }
        if(!userState.email){
            formIsValid=false;
            errors['email'] = "Couldn't be empty";
        }
        else if(userState.email !== "undefined"){
            if(!userState.email.match(/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/)){
                formIsValid = false;
                errors['email']= "Email is not valid!   ";
            }
        }
        if(!userState.phoneNumber){
            formIsValid=false;
            errors['phoneNumber'] = "Couldn't be empty";
        }
        else if(userState.phoneNumber !== "undefined"){
            if(!userState.phoneNumber.match(/^[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{3}$/)){
                formIsValid = false;
                errors['phoneNumber']= "Phone number is not valid!";
            }
        }

        setErrors(errors);
        return formIsValid;
    };

    const submitHandler = () => {
        if(handleValidation()){
            props.signUpAction(userState);
        }
        else
        {
            console.log("U messed up");
        }

    };


    return (
        <div>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control type="text" name="firstName" onChange={e => InputHandler(e)} placeholder="First Name"  />
                        <small>{ errors.firstName ? errors.firstName : "" }</small>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control type="text" name="lastName" onChange={e => InputHandler(e)} placeholder="Last Name"  />
                        <small>{ errors.lastName ? errors.lastName : "" }</small>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control name="password" type="password" onChange={e => InputHandler(e)} placeholder="Password"  />
                        <small>{ errors.password ? errors.password : "" }</small>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control name="role" onChange={e => InputHandler(e)} as="select" size="sm" custom>
                            <option value="Chef">Chef</option>
                            <option value="Waiter">Waiter</option>
                            <option value="Manager">Manager</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control type="text" name="email" onChange={e => InputHandler(e)} placeholder="Email"  />
                        <small>{ errors.email ? errors.email : "" }</small>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control type="text" name="phoneNumber" onChange={e => InputHandler(e)} placeholder="Phone Number"  />
                        <small>{ errors.phoneNumber ? errors.phoneNumber : "" }</small>
                    </Col>
                </Form.Row>
            </Form>

            <div className={classes.buttonContainer}>
                <Button
                    className="mt-auto font-weight-bold"
                    variant="dark"
                    onClick={()=>{submitHandler()}}>
                    Confirm
                </Button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    menu: state.firestore.ordered.menu || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps, {signUpAction}),  firestoreConnect(() => ['menu']))(ManagerAddNewUser);