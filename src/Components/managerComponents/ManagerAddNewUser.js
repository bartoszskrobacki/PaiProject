import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "./../../Pages/logInPage.module.css"

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
                errors['lastName']= "Nazwisko powinno zawierać wyłącznie litery!";
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
        <div className={classes.container}>
            <div className="container">

                <form className="white" onSubmit={submitHandler}>
                    <h5 className="grey-text text-darken-3">Rejestracja użytkowników</h5>
                    <div className="input-field">
                        <label htmlFor="email">Imie</label>
                        <input type="text" name="firstName" onChange={e => InputHandler(e)} />
                        <div className="red-text"><small>{ errors.firstName ? errors.firstName : "" }</small></div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Nazwisko</label>
                        <input type="text" name="lastName" onChange={e => InputHandler(e)} />
                        <div className="red-text">  <small>{ errors.lastName ? errors.lastName : "" }</small></div>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Hasło</label>
                        <input  name="password" type="password" id='password' onChange={e => InputHandler(e)} />

                    </div>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" id='email' onChange={e => InputHandler(e)} />
                        <div className="red-text">  <small>{ errors.email ? errors.email : "" }</small></div>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Numer telefonu</label>
                        <input type="text" name="phoneNumber" onChange={e => InputHandler(e)}  />
                        <div className="red-text"><small>{ errors.phoneNumber ? errors.phoneNumber : "" }</small></div>
                    </div>
                    <Form>
                        <Form.Row>
                            Rola:
                            <Col xs="auto">
                                <Form.Control name="role" onChange={e => InputHandler(e)} as="select" size="sm" custom>
                                    <option value="Chef">Kucharz</option>
                                    <option value="Waiter">Kelner</option>
                                    <option value="Manager">Manager</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form>

                    <div className="input-field">
                        <Button className="mt-auto font-weight-bold"
                                variant="dark"
                                block
                                onClick={()=>submitHandler()}>Zarejstruj nowego użytkownika</Button>



                    </div>
                </form>

            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    menu: state.firestore.ordered.menu || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps, {signUpAction}),  firestoreConnect(() => ['menu']))(ManagerAddNewUser);