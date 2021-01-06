import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";
import classes from "./editName.module.css";

import {connect} from "react-redux";


import {compose} from "redux";
import {createDishAction} from "../../actions/createDishAction";
import {firestoreConnect} from "react-redux-firebase";

const ManagerAddNewDish = props => {

    const [dishState, setState] = useState({
        name: "",
        category: "Obiad",
        price: "",
        placeToPrepare: "Kuchnia"
    });

    const [errors, setErrors] = useState({
        name: "",
        price: ""
    });

    const InputHandler = (e) => {
       let field = e.target.name;
       let value = e.target.value;

        delete errors[field];
       setState({...dishState, [field] : value });
    };

    const handleValidation = () => {
        let formIsValid = true;
        let errors = {};

        //name validation

        if(!dishState.name){
            formIsValid=false;
            errors['name'] =  "Couldn't be empty";
        }
        else if(dishState.name !== "undefined"){
            if(!dishState.name.match(/^[a-zA-Z ,.]+$/)){
                formIsValid = false;
                errors['name'] =  "Only letters!";
            }
        }
        //category validation
        if(!dishState.price){
            formIsValid=false;
            errors['price'] = "Couldn't be empty";
        }
        else if(dishState.price !== "undefined"){
            if(!dishState.price.match(/^[0-9,.]+$/)){
                formIsValid = false;
                errors['price']= "Only numbers!";
            }
        }
        setErrors(errors);
        return formIsValid;
    };

    const submitHandler = () => {
        if(handleValidation()){

            props.createDishAction(dishState);
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
                        <Form.Control type="text" name="name" onChange={e => InputHandler(e)} placeholder="name"  />
                        <small>{ errors.name ? errors.name : "" }</small>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control type="text" name="price" onChange={e => InputHandler(e)} placeholder="price"  />
                        <small>{ errors.price ? errors.price : "" }</small>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
                <Form.Row>
                    <Col xs="auto">
                        <Form.Control name="category" onChange={e => InputHandler(e)} as="select" size="sm" custom>
                            <option value="Zupa">Zupa</option>
                            <option value="Obiad">Obiad</option>
                            <option value="Zestaw Obiadowy">Zestaw Obiadowy</option>
                            <option value="Deser">Deser</option>
                            <option value="Napój">Napój</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
            </Form>
            <Form>
            <Form.Row>
                <Col xs="auto">
                    <Form.Control name="placeToPrepare" onChange={e => InputHandler(e)} as="select" size="sm" custom>
                        <option value="Kuchnia">Kuchnia</option>
                        <option value="Bar">Bar</option>
                    </Form.Control>
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


export default compose(connect(mapStateToProps, {createDishAction}),  firestoreConnect(() => ['menu']))(ManagerAddNewDish);