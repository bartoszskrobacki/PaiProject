import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import {createBrowserHistory} from 'history'
import {Home} from "../../Pages/Home" // change it to your custom component

const locationHelper = locationHelperBuilder({});
const browserHistory = createBrowserHistory();

export const UserIsAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsAuthenticated',
    LoadingComponent: Home,
    allowRedirectBack: false,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || '/login',
    authenticatingSelector: ({ firebase: { auth, profile, isInitializing } }) =>
        !auth.isLoaded || !profile.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { profile } }) =>
        profile.role === 'Manager',
    redirectAction: newLoc => dispatch => {
        browserHistory.replace(newLoc)
        dispatch({ type: 'UNAUTHED_REDIRECT' })
    }
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    AuthenticatingComponent: Home,
    allowRedirectBack: false,
    redirectPath: (state, ownProps) =>
        locationHelper.getRedirectQueryParam(ownProps) || '/',
    authenticatingSelector: ({ firebase: { auth, isInitializing } }) =>
        !auth.isLoaded || isInitializing === true,
    authenticatedSelector: ({ firebase: { auth } }) =>
        auth.isLoaded && auth.isEmpty,
    redirectAction: newLoc => (dispatch) => {
        browserHistory.replace(newLoc); // or routerActions.replace
        dispatch({ type: 'UNAUTHED_REDIRECT' });
    },
});