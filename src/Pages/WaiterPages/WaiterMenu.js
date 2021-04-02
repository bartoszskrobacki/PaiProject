import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const WaiterMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
        <Link to={"/waiterChooseTable"} ><MenuOption>Stwórz nowe zamówienie</MenuOption></Link>
         <Link to={"/waiterOrders"} ><MenuOption>Sprawdź listę zamówień</MenuOption></Link>
            <Link to={"/waiterDailyReport"}><MenuOption>Sporządź mój dzieny raport</MenuOption></Link>
            <MenuOption>Wyloguj się</MenuOption>
        </div>
    );
};