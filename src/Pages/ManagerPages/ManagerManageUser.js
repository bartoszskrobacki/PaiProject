
import React from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import classes from "./managerManageDishes.module.css"

import {updateAction} from "../../actions/updateAction";
import {EditPhoneNumber} from "../../Components/managerComponents/editUserComponents/EditPhoneNumber"
import {EditRole} from "../../Components/managerComponents/editUserComponents/EditRole";
import {EditEmail} from "../../Components/managerComponents/editUserComponents/EditEmail";

const ManagerManageUser = props => {

    return(
        <div>
            <div className={classes.itemsContainer}>
                {props.users.map(user =>
                    <div className={classes.singleItem} key={user.id}>
                        <h5>{user.firstName + " " + user.lastName}  <ion-icon

                            name="close-circle"></ion-icon></h5>
                        <div className={classes.itemContainer}>
                        <EditPhoneNumber user={user} updateAction={props.updateAction}/>
                        <EditRole user={user}  updateAction={props.updateAction} />
                        <EditEmail user={user} updateAction={props.updateAction} />
                        </div>
                    </div>
                )
                }
            </div>

        </div>
    );

};




const mapStateToProps = state => ({
    users: state.firestore.ordered.users || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps, {updateAction}),  firestoreConnect(() => ['users']))(ManagerManageUser);