import React from "react";

import {Link} from "react-router-dom";
import stolik4 from "../images/Stolik4.png"
import stolik6 from "../images/Stolik6.png"
import stolik8 from "../images/Stolik8.jpg"
import stolik4poz from "../images/Stolik4poz.png"
import classes from "./WaiterTables.module.css"
export const WaiterTables = (props) => {
    return (


          <div className={classes.leftRow}>
            <div className={classes.firstLeftRow}>
            <Link to={{pathname: "/waiterCreateOrder", table: "Table 1"}} ><img src={stolik4}  alt="stolik4"/> </Link>
            <Link to={{pathname: "/waiterCreateOrder", table: "Table 2"}} ><img src={stolik4}  alt="stolik4"/> </Link>
            <Link to={{pathname: "/waiterCreateOrder", table: "Table 3"}} ><img src={stolik4}  alt="stolik4"/> </Link>
            </div>
            <div className={classes.secondLeftRow}>
            <Link to={{pathname: "/waiterCreateOrder", table: "Table 4"}} ><img src={stolik6}  alt="stolik6"/></Link>
                <Link to={{pathname: "/waiterCreateOrder", table: "Table 5"}} ><img src={stolik6}  alt="stolik6"/></Link>
            </div>
          </div>



    );
};