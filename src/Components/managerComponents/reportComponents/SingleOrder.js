import React, {useState} from "react";
import {Button} from "react-bootstrap";
import classes from "./SingleOrder.module.css"
import moment from "moment";


export const SingleOrder = (props) => {

    const [details, setDetails] = useState(false);

    const detailsHandler = () =>
    {
        setDetails(!details);
    }

    return (
        <div className={classes.container}>
            <h5>{moment.unix(props.order.createdAt.seconds).format(' DD YYYY, hh:mm:ss')}</h5>
            <div className={classes.columns}>
            <div className={classes.leftColumn}>
                <div>{props.order.table}</div>
                <div>Kelner:  {props.order.waiterFirstName} {props.order.waiterLastName} </div>
            </div>
            <div className={classes.rightColumn}>
                <div>Płatność:  {props.order.payment === "Cash" ? "Gotówka" : "Karta"}</div>
                <div>Suma zamówienia: {props.order.orderCost.toFixed(2)} zł</div>
                <div><div
                onClick={() => (detailsHandler())}>Szczegóły {details ? (<ion-icon name="caret-up-outline"></ion-icon>) : (<ion-icon name="caret-down-outline"></ion-icon>)}</div>
                </div>
            </div>
            </div>
            {details ? (
            props.order.listOfCurrentThings.map(meal => <div key={meal.id}>
                {meal.quantity}x{meal.name} {(meal.quantity*meal.price).toFixed(2)}zł
            </div>)) :
                (null)}
        </div>

    );
}