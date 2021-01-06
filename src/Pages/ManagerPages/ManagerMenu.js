import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const ManagerMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <MenuOption>Create new Order</MenuOption>
            <MenuOption>Check List Of orders</MenuOption>
            <MenuOption>Check Reports</MenuOption>
            <Link to={"managerUserMenu"}><MenuOption>Manage Users</MenuOption></Link>
           <Link to={"managerDishMenu"}><MenuOption>Manage Dishes</MenuOption></Link>
            <MenuOption>Log out</MenuOption>
        </div>
    );
}