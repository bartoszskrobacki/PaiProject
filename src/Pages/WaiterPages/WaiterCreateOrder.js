import React, {useState, Fragment, useEffect} from 'react';


import {connect} from "react-redux";

import {productQuantity} from "../../actions/productQuanitity";
import {removeFromBasket} from "../../actions/removeAction";
import {addOrder} from "../../actions/addOrderAction";
import {resetBasket} from "../../actions/resetBasketAction";
import {addAction} from "../../actions/addAction";
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";
import {Table, Button} from "react-bootstrap";
import classes from "./WaiterCreateOrder.module.css"
import TableMenu from "../../Components/WaiterComponents/TableMenu";

const WaiterCreateOrder = props => {

    const [payment, setPayment] = useState("Cash");

    const fliperHanlder = (e) => {
        if(e === 1){
            setPayment("Card");
        }
        else
        {
            setPayment("Cash");
        }
    };

    const tableNumber = props.location.table;
    useEffect(() => {

    }, [props.menu]);

    console.log(tableNumber);


    return(
        <div className={classes.main}>
            <div className={classes.menu}>
                <h2>Zupa</h2>
                <TableMenu data={props.menu} nameOfMeal="Zupa" />
                <h2>Obiad</h2>
                <TableMenu data={props.menu} nameOfMeal="Obiad" />
                <h2>Zestaw Obiadowy</h2>
                <TableMenu data={props.menu} nameOfMeal="Zestaw Obiadowy" />
                <h2>Deser</h2>
                <TableMenu data={props.menu} nameOfMeal="Deser" />
                <h2>Napój</h2>
                <TableMenu data={props.menu} nameOfMeal="Napój" />
            </div>
                    <div className={classes.container_products}>
                        <div className={classes.product_header}>
                            <div className={classes.product_title}>PRODUKT </div>
                            <div className={classes.product_price}>CENA </div>
                            <div className={classes.product_quantity}>ILOŚĆ </div>
                            <div className={classes.product_total}>SUMA </div>
                        </div>
                    {
                        props.products.listOfCurrentThings.map((product) => {
                            return (
                                <div className={classes.products} key={product.id}>
                                    <div className={classes.product}>
                                        <div className={classes.deleteIcon}>
                                            <ion-icon
                                                onClick={() => props.removeFromBasket(props.products.listOfCurrentThings, product)}
                                                name="close-circle"></ion-icon>
                                        </div>
                                        <div className={classes.productName}>{product.name}</div>
                                    </div>
                                    <div className={classes.product_price}>{product.price.toFixed(2)}zł</div>
                                    <div className={classes.product_quantity}>
                                        <ion-icon name="arrow-back-circle-outline"
                                                  onClick={() => props.productQuantity(props.products.listOfCurrentThings, product, "DECREASE")}></ion-icon>
                                        <span>{product.quantity}</span>
                                        <ion-icon name="arrow-forward-circle-outline"
                                                  onClick={() => props.productQuantity(props.products.listOfCurrentThings, product, "INCREASE")}></ion-icon>
                                    </div>
                                    <div className={classes.product_total}>{(product.quantity * product.price).toFixed(2)}zł</div>

                                </div>

                            );
                        })
                    }
                        <div className="basketTotalContainer">
                            <h4>Koszt zamówienia:  {props.products.shoppingCartCost.toFixed(2)}zł </h4>
                            <Button
                                    className="mt-auto font-weight-bold"
                                    variant="dark"  onClick={() => { props.addOrder(props.finalizeOrder, {table: tableNumber, listOfCurrentThings:props.products.listOfCurrentThings, orderCost: props.products.shoppingCartCost, payment: payment });
                                props.resetBasket()}}>Złóż zamówienie</Button>
                        </div>
                  </div>
            </div>


    );

};



const mapStateToProps = state => ({
    products: state.orderState,
    finalizeOrder: state.firestore.ordered.currentOrders || state.finalizeOrderState.listOfOrders,
    menu: state.firestore.ordered.menu  || state.finalizeOrderState.listOfOrders
})


export default compose(connect(mapStateToProps,{addAction, productQuantity, removeFromBasket, resetBasket, addOrder}),firestoreConnect(() => ['menu', 'currentOrders']))(WaiterCreateOrder);