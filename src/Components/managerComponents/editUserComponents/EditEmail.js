import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "../editName.module.css";



export const EditEmail = (props) => {

    const [isEdited, setEdited] = useState(false);
    let style =  isEdited ? classes.notediting : classes.editing;

    const startEditing = () => {
        setEdited(true);
    };

    const endEditing = () => {
        setEdited(false);
    };

    const [errors, setErrors] = useState({
        email: "",
    });

    const [email, setInput] = useState('');

    const InputHandler = (enteredText) =>{
        setInput(enteredText);
    };

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        //name validation

        if(!email){
            formIsValid=false;
            errors['email'] = "Couldn't be empty";
        }
        else if(email !== "undefined"){
            if(!email.match(/^([a-zA-Z0-9_]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/)){
                formIsValid = false;
                errors['email']= "Email is not valid!   ";
            }
        }
        setErrors(errors);
        return formIsValid;
    };

    const submitHandler = () => {
        if(handleValidation()){
            props.updateAction('users',props.user.id,email, 'email');
            endEditing();
        }
        else
        {
            console.log("U messed up");
        }

    };


    return (
        <div className={style}>
            <div className={classes.textContainer} >
                Email
            </div>
            {!isEdited ? (
                <div className={classes.itemName}>{props.user.email}<ion-icon name="pencil" onClick={()=>{startEditing()}}></ion-icon> </div>
            ) : (<div className={classes.formAndButtonContainer}>
                    <Form>
                        <Form.Row>
                            <Col xs="auto">
                                <input type="text"  onChange={e => InputHandler(e.target.value)} placeholder={props.user.email}  />
                            </Col>
                        </Form.Row>
                    </Form>
                    <small>{ errors.email ? errors.email : "" }</small>
                    <div className={classes.buttonContainer}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            onClick={()=>submitHandler()}>
                            Confirm
                        </Button>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            onClick={()=>endEditing()}>
                            Eject
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}