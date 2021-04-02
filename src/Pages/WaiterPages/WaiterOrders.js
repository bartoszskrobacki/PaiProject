import React from 'react';

import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import {Button, Card, ListGroup} from "react-bootstrap";
import classes from "./WaiterOrders.module.css"
import ReactMoment from "../../Components/ReactMoment";
import {completeOrder} from "../../actions/completeOrderAction";

const WaiterOrders = props => {
    return(
        <div className={classes.cardsContainer}>
            {props.finalizedOrder.filter(order  =>
                order.waiterID === props.auth.uid).map((order) => { return (
                <div className={classes.cardContainer}>
                    <Card key={order.id} className={classes.card}>

                        <Card.Header className={classes.cardHeader}><div>{order.table}</div> <ReactMoment timestamp={order.createdAt.toDate()/1000} interval={1000} /> </Card.Header>
                        <ListGroup variant="flush">
                            {order.listOfCurrentThings.map(meal =>
                                <ListGroup.Item key={meal.id}> {meal.quantity}x {meal.name} {meal.price.toFixed(2)}zł  </ListGroup.Item>
                            )
                            }
                        </ListGroup>
                      <div style={{textAlign:"center", fontSize: 23}}>Koszt zamówienia:  <br/>  {order.orderCost.toFixed(2)}zł</div>
                        <Button className="mt-auto font-weight-bold"
                                variant="dark"
                                block
                                onClick={() => props.completeOrder(order)}>Zamówienie wykonane</Button>
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


export default compose(connect(mapStateToProps, {completeOrder}),  firestoreConnect(() => ['currentOrders']))(WaiterOrders);