import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "../editName.module.css";



export const EditRole = (props) => {

    const [isEdited, setEdited] = useState(false);
    let style =  isEdited ? classes.notediting : classes.editing;

    const startEditing = () => {
        setEdited(true);
    };

    const endEditing = () => {
        setEdited(false);
    };


    const [input, setInput] = useState('Waiter');

    const InputHandler = (enteredText) =>{
        setInput(enteredText);
    };



    const submitHandler = () => {
            props.updateAction('users',props.user.id,input, 'role');
            endEditing();
    };



    return (
        <div className={style}>
            <div className={classes.textContainer} >
                Role
            </div>
            {!isEdited ? (
                <div className={classes.itemName}>{props.user.role}<ion-icon name="pencil" onClick={()=>{startEditing()}}></ion-icon> </div>
            ) : (<div className={classes.formAndButtonContainer}>
                    <Form>
                        <Form.Row>
                            <Col xs="auto">
                                <Form.Control name="role" onChange={e => InputHandler(e.target.value)} as="select" size="sm" placeholder={props.user.role} custom>
                                    <option value="Waiter">Waiter</option>
                                    <option value="Chef">Chef</option>
                                    <option value="Manager">Manager</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form>

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