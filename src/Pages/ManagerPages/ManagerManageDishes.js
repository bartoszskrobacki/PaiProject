
import React from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";
import classes from "./managerManageDishes.module.css"
import {EditName} from "../../Components/managerComponents/editDishesComponents/EditName";
import {EditCategory} from "../../Components/managerComponents/editDishesComponents/EditCategory";
import {EditPrice} from "../../Components/managerComponents/editDishesComponents/EditPrice";
import {updateAction} from "../../actions/updateAction";

const ManagerManageDishes = props => {

    return(
        <div>
            <div className={classes.itemsContainer}>
                                {props.menu.map(meal =>
                                    <div key={meal.id}>
                                       <h5>{meal.name}</h5>
                                        <div className={classes.itemContainer}>
                                            <EditName meal={meal} updateAction={props.updateAction}  />
                                            <EditCategory meal={meal} updateAction={props.updateAction} />
                                            <EditPrice meal={meal} action={props.updateAction} />
                                    </div>
                                    </div>
                                )
                                }
            </div>

        </div>
    );

};




const mapStateToProps = state => ({
    menu: state.firestore.ordered.menu || state.finalizeOrderState.listOfOrders
});


export default compose(connect(mapStateToProps, {updateAction}),  firestoreConnect(() => ['menu']))(ManagerManageDishes);