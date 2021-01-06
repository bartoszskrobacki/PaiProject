import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const ChefMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <Link to={"/chefOrders"}><MenuOption href="/chefOrders">Check orders</MenuOption></Link>
            <MenuOption>Log out</MenuOption>
        </div>
    );
}