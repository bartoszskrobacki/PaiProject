import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "../editName.module.css";



export const EditPhoneNumber = (props) => {

    const [isEdited, setEdited] = useState(false);
    let style =  isEdited ? classes.notediting : classes.editing;

    const startEditing = () => {
        setEdited(true);
    };

    const endEditing = () => {
        setEdited(false);
    };

    const [errors, setErrors] = useState({
        phoneNumber: "",

    });

    const [phoneNumber, setPhoneNumber] = useState('');

    const InputHandler = (enteredText) =>{
        setPhoneNumber(enteredText);
    };

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        //name validation

        if(!phoneNumber){
            formIsValid=false;
            errors['phoneNumber'] = "Couldn't be empty";
        }
        else if(phoneNumber !== "undefined"){
            if(!phoneNumber.match(/^[0-9]{3}[ -]?[0-9]{3}[ -]?[0-9]{3}$/)){
                formIsValid = false;
                errors['phoneNumber']= "Phone number is not valid!";
            }
        }
        setErrors(errors);
        return formIsValid;
    };

    const submitHandler = () => {
        if(handleValidation()){
            props.updateAction('users',props.user.id,parseInt(phoneNumber), 'phoneNumber');
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
                Phone Number
            </div>
            {!isEdited ? (
                <div className={classes.itemName}>{props.user.phoneNumber}<ion-icon name="pencil" onClick={()=>{startEditing()}}></ion-icon> </div>
            ) : (<div className={classes.formAndButtonContainer}>
                    <Form>
                        <Form.Row>
                            <Col xs="auto">
                                <input type="text"  onChange={e => InputHandler(e.target.value)} placeholder={props.user.phoneNumber}  />
                            </Col>
                        </Form.Row>
                    </Form>
                    <small>{ errors.phoneNumber ? errors.phoneNumber : "" }</small>
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