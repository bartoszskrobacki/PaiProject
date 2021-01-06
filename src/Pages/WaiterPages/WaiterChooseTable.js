import React from "react";
import {MenuOption} from "../../Components/MenuOption"

export const WaiterChooseTable = (props) => {
    return (
        <div className="container" style={{margin: "auto"}}>
            <MenuOption>Table 1</MenuOption>
            <MenuOption>Table 2</MenuOption>
            <MenuOption>Table 3</MenuOption>
            <MenuOption>Table 4</MenuOption>
        </div>
    );
};