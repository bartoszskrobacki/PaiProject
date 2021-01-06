import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const WaiterMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
        <Link to={"/waiterChooseTable"} ><MenuOption>Create new Order</MenuOption></Link>
         <Link to={"/waiterOrders"} ><MenuOption>Check List of Orders</MenuOption></Link>
            <MenuOption>Log out</MenuOption>
        </div>
    );
};