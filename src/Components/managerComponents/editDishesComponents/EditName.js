import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "../editName.module.css";

export const EditName = (props) => {

    const [isEdited, setEdited] = useState(false);
    let style =  isEdited ? classes.notediting : classes.editing;

    const startEditing = () => {
      setEdited(true);
    };

    const endEditing = () => {
      setEdited(false);
    };

    const [name, setName] = useState('');

    const InputHandler = (enteredText) =>{
        setName(enteredText);
    };

    return (
        <div className={style}>
                    <div className={classes.textContainer} >
                        Name
                    </div>
                        {!isEdited ? (
                            <div className={classes.itemName}>{props.meal.name} <ion-icon name="pencil" onClick={()=>{startEditing()}}></ion-icon> </div>
                        ) : (<div className={classes.formAndButtonContainer}>
                            <Form>
                                <Form.Row>
                                    <Col xs="auto">
                                        <Form.Control type="text"  onChange={e => InputHandler(e.target.value)} placeholder={props.meal.name} />
                                    </Col>
                                </Form.Row>
                            </Form>
                            <div className={classes.buttonContainer}>
                            <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            onClick={()=>props.updateAction('menu',props.meal.id,name, 'name')  & endEditing()}>
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