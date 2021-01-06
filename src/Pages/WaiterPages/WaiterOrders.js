import React from 'react';

import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Card, ListGroup} from "react-bootstrap";
import classes from "./WaiterOrders.module.css"

const WaiterOrders = props => {
    return(
        <div className={classes.cardsContainer}>
            {props.finalizedOrder.map((order) => { return (
                <div className={classes.cardContainer}>
                    <Card key={order.id} className={classes.card}>
                        <Card.Header>{order.table}</Card.Header>
                        <ListGroup variant="flush">
                            {order.listOfCurrentThings.map(meal =>
                                <ListGroup.Item key={meal.id}> {meal.name} {meal.price}zł {meal.quantity} </ListGroup.Item>
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
    finalizedOrder: state.firestore.ordered.currentOrders  || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps),  firestoreConnect(() => ['currentOrders']))(WaiterOrders);