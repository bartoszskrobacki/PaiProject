import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {authAction} from "../../actions/authAction";
import {signOut} from "../../actions/signOutAction";

const PrivateRoute = ( {component: RouteComponent, profile, auth, role, UserType, ...rest}) => {

    console.log(profile)
    return(
        <Route
            {...rest}
            render={routeProps =>
                profile.role === UserType ? (
                <RouteComponent {...routeProps}/>
            ) :
                (
                    <Redirect to = {"/login"} />
                )
            }
            />
    );
};

const mapStateToProps = (state) => {
    return {
       role: state.authState,
        profile: state.firebase.profile
    }
}


export default connect(mapStateToProps)(PrivateRoute)