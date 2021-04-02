import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const ManagerMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <Link to={"/waiterChooseTable"} > <MenuOption>Stwórz nowe zamówienie</MenuOption></Link>
            <Link to={"/managerOrders"} >  <MenuOption>Sprawdź listę aktualnych zamówień</MenuOption></Link>
            <Link to="managerReports"><MenuOption>Zobacz raporty</MenuOption></Link>
            <Link to="managerUserMenu"><MenuOption>Zarządzaj użytkownikami</MenuOption></Link>
           <Link to="managerDishMenu"><MenuOption>Zarządzaj daniami</MenuOption></Link>
            <MenuOption>Wyloguj się</MenuOption>
        </div>
    );
}