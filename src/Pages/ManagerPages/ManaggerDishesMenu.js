import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const ManagerDishMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <Link to={"managerAddNewDish"}> <MenuOption>Add new Dish</MenuOption></Link>
            <Link to={"managerManageDishes"}><MenuOption>Manage Dishes</MenuOption></Link>
        </div>
    );
}