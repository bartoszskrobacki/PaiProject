import React, { useState} from 'react'
import { connect } from 'react-redux'


import {authAction} from "../actions/authAction";
import {signOut} from "../actions/signOutAction";
import {Button} from "react-bootstrap";
import classes from "./logInPage.module.css"


const LogInPage = props => {
   const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })


    const [errors, setErrors] = useState({
                                             email: ""
                                         });


    const inputHandler = (e) => {
        let field = e.target.name;
        let value = e.target.value;
        delete errors[field];
        setCredentials({...credentials, [field] : value });
    };

    const submitHandler = () => {
        if(handleValidation()){
            props.authAction(credentials.email, credentials.password);

        }
        else
        {
            console.log("U messed up");
        }

    };

    const handleValidation = (e) => {
        let formIsValid = true;
        let errors = {};

        //name validation

        if(!credentials.email){
            formIsValid=false;
            errors['email'] = "Couldn't be empty";
        }
        else if(credentials.email !== "undefined"){
            if(!credentials.email.match(/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/)){
                formIsValid = false;
                errors['email']= "Email is not valid! ";
            }
        }

        setErrors(errors);
        return formIsValid;
    };

    console.log(props.profile)

        const { authError, auth, profile } = props;



        return (

            <div className={classes.container}>
            <div className="container">
                <form className="white" onSubmit={submitHandler}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" id='email' onChange={e => inputHandler(e)} />
                        <small>{ errors.email ? errors.email : "" }</small>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input  name="password" type="password" id='password' onChange={e => inputHandler(e)} />
                    </div>
                    <div className="input-field">
                        <Button className="mt-auto font-weight-bold"
                                variant="dark"
                                block
                        onClick={()=>submitHandler()}>Login</Button>
                        <div className="center red-text">
                            { authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>

            </div>
            </div>
        )

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.authState.error,
        profile: state.firebase.profile
    }
}


export default connect(mapStateToProps, {authAction, signOut})(LogInPage)