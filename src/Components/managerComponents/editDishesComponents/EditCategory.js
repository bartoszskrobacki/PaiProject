import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "../editName.module.css";

export const EditCategory = (props) => {

    const [isEdited, setEdited] = useState(false);
    let style =  isEdited ? classes.notediting : classes.editing;

    const startEditing = () => {
        setEdited(true);
    };

    const endEditing = () => {
        setEdited(false);
    };

    const [category, setCategory] = useState('Zupa');

    const InputHandler = (enteredText) =>{
        setCategory(enteredText);
    };

    return (
        <div className={style}>
            <div className={classes.textContainer} >
                Category
            </div>
            {!isEdited ? (
                <div className={classes.item}>{props.meal.category} <ion-icon name="pencil" onClick={()=>{startEditing()}}></ion-icon> </div>
            ) : (<div className={classes.formAndButtonContainer}>
                    <Form>
                        <Form.Row>
                            <Col xs="auto">
                                <Form.Control  onChange={e => InputHandler(e.target.value)} as="select" size="sm" custom>
                                    <option value="Zupa">Zupa</option>
                                    <option value="Obiad">Obiad</option>
                                    <option value="Zestaw Obiadowy">Zestaw Obiadowy</option>
                                    <option value="Deser">Deser</option>
                                    <option value="Napój">Napój</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form>
                    <div className={classes.buttonContainer}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            onClick={()=>props.updateAction('menu',props.meal.id,category, 'category') & endEditing()}>
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