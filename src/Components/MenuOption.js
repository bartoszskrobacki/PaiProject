import React from "react";
import {Button} from "react-bootstrap";

export const MenuOption = (props) => {
    return (
        <div className="container" style={{width: "60%", paddingTop: 10}}>
            <Button
                className="mt-auto font-weight-bold"
                variant="dark"
                block>
                {props.children}
            </Button>
        </div>
    );
}