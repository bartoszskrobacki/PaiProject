import React, {useState} from "react";
import {MenuOption} from "../../Components/MenuOption"
import {Link} from "react-router-dom";
import {WaiterTables} from "../../Components/WaiterComponents/WaiterTables";
import Toggle from 'react-toggle'
import "react-toggle/style.css"
export const WaiterChooseTable = (props) => {
   const [graphicView, setGraphicView] = useState(true);
    return (
        <div className="container" style={{margin: "auto"}}>
            {graphicView ? <WaiterTables/> : (
                <div><Link to={{pathname: "/waiterCreateOrder", table: "Table 1"}} ><MenuOption>Stół 1</MenuOption></Link>
                <Link to={{pathname: "/waiterCreateOrder", table: "Table 2"}} ><MenuOption>Stół 2</MenuOption></Link>
                <Link to={{pathname: "/waiterCreateOrder", table: "Table 3"}} >  <MenuOption>Stół 3</MenuOption></Link>
                <Link to={{pathname: "/waiterCreateOrder", table: "Table 4"}} > <MenuOption>Stół 4</MenuOption></Link>
                    <Link to={{pathname: "/waiterCreateOrder", table: "Table 5"}} ><MenuOption>Stół 5</MenuOption></Link>

                </div>) }
            <div style={{position: "relative", top: "50px", textAlign: "center", width: "100%"}}>
            <label>
                Text View
                <Toggle
                    defaultChecked={graphicView}
                    onChange={() => setGraphicView(!graphicView)} />
                Graphic View
            </label>
            </div>
        </div>
    );
};

/*

 */