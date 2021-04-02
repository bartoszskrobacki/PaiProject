import React from 'react';

import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Button, Card, ListGroup} from "react-bootstrap";
import classes from "../WaiterPages/WaiterOrders.module.css"
import ReactMoment from "../../Components/ReactMoment";

const ManagerOrders = props => {
    return(
        <div className={classes.cardsContainer}>
            {props.finalizedOrder.map((order) => { return (
                <div className={classes.cardContainer}>
                    <Card key={order.id} className={classes.card}>

                        <Card.Header className={classes.cardHeader}><div>{order.table} </div> <ReactMoment timestamp={order.createdAt.toDate()/1000} interval={1000} /> <div>Kelner: {order.waiterFirstName} {order.waiterLastName}</div> </Card.Header>
                        <ListGroup variant="flush">
                            {order.listOfCurrentThings.map(meal =>
                                <ListGroup.Item key={meal.id}> {meal.quantity}x {meal.name} {meal.price}zł  </ListGroup.Item>
                            )
                            }
                        </ListGroup>

                    </Card>

                </div>
            )})}
        </div>
    );

};




const mapStateToProps = state => ({
    finalizedOrder: state.firestore.ordered.currentOrders  || state.finalizeOrderState.listOfOrders,
    auth: state.firebase.auth
});


export default compose(connect(mapStateToProps),  firestoreConnect(() => ['currentOrders']))(ManagerOrders);