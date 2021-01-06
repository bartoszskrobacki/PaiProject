import React from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";

export const ManagerUserMenu = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <Link to={"/managerAddNewUser"}><MenuOption>Add new User</MenuOption></Link>
            <Link to={"/managerManageUser"}><MenuOption>Manage Users</MenuOption></Link>
        </div>
    );
}