import React from "react";
import {MenuOption} from "../../Components/MenuOption"

export const WaiterCreateOrder = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <MenuOption>Create new Order</MenuOption>
            <MenuOption>Check List of Orders</MenuOption>
            <MenuOption>Log out</MenuOption>
        </div>
    );
};