import React, {useState} from "react";
import {Button, Form, Col} from "react-bootstrap";


import {connect} from "react-redux";

import classes from "../../Pages/logInPage.module.css"
import {compose} from "redux";
import {createDishAction} from "../../actions/createDishAction";
import {firestoreConnect} from "react-redux-firebase";

const ManagerAddNewDish = props => {

    const [dishState, setState] = useState({
        name: "",
        category: "Obiad",
        price: 0,
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
            <div className={classes.container}>
                <div className="container">
                    <form className="white" onSubmit={submitHandler}>
                        <h5 className="grey-text text-darken-3">Dodaj nową potrawę</h5>
                        <div className="input-field">
                            <label htmlFor="password">Nazwa</label>
                            <input type="text" name="name" id="name" onChange={e => InputHandler(e)} onChange={e => InputHandler(e)} />
                            <small>{ errors.name ? errors.name : "" }</small>
                        </div>
                        <div className="input-field">
                            <label htmlFor="email">Cena</label>
                            <input type="text" name="price" id="price" onChange={e => InputHandler(e)}  />
                            <small>{ errors.price ? errors.price : "" }</small>
                        </div>
                        <Form>
                            <Form.Row>Kategoria:
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

                            <Form.Row>  Miejsce przygotowania:
                                <Col xs="auto">
                                    <Form.Control name="placeToPrepare" onChange={e => InputHandler(e)} as="select" size="sm" custom>
                                        <option value="Kuchnia">Kuchnia</option>
                                        <option value="Bar">Bar</option>
                                    </Form.Control>
                                </Col>
                            </Form.Row>
                        </Form>
                        <div className="input-field">
                            <Button className="mt-auto font-weight-bold"
                                    variant="dark"
                                    block
                                    onClick={()=>submitHandler()}>Dodaj nową potrawę</Button>

                        </div>
                    </form>


        </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    menu: state.firestore.ordered.menu || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps, {createDishAction}),  firestoreConnect(() => ['menu']))(ManagerAddNewDish);