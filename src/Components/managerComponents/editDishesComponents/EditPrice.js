import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "../editName.module.css";



export const EditPrice = (props) => {

    const [isEdited, setEdited] = useState(false);
    let style =  isEdited ? classes.notediting : classes.editing;

    const startEditing = () => {
        setEdited(true);
    };

    const endEditing = () => {
        setEdited(false);
    };

    const [price, setPrice] = useState('');

    const InputHandler = (enteredText) =>{
        setPrice(enteredText);
    };

    return (
        <div className={style}>
            <div className={classes.textContainer} >
                Price
            </div>
            {!isEdited ? (
                <div className={classes.itemName}>{props.meal.price} zł<ion-icon name="pencil" onClick={()=>{startEditing()}}></ion-icon> </div>
            ) : (<div className={classes.formAndButtonContainer}>
                    <Form>
                        <Form.Row>
                            <Col xs="auto">
                                <input type="text"  onChange={e => InputHandler(e.target.value)} placeholder={props.meal.price + "zł"}  />
                            </Col>
                        </Form.Row>
                    </Form>
                    <div className={classes.buttonContainer}>
                        <Button
                            className="mt-auto font-weight-bold"
                            variant="dark"
                            onClick={()=>props.action('menu',props.meal.id,parseFloat(price), 'price')  & endEditing()}>
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