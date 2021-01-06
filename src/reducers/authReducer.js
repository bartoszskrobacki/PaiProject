import {
    LOGIN_USER,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_ERROR,
    UPDATE_ERROR,
    UPDATE_SUCCESSFUL,
    CREATE_DISH_ERROR, CREATE_DISH_SUCCESS, CREATE_USER_ERROR, CREATE_USER_SUCCESS
} from "../actions/types";


const initialState = {
    error: null,
    role: "Waiter"
};

const authReducer =(state = initialState, action) => {

    switch(action.type) {

        case LOGIN_USER:
            console.log('Log in success');
            return {
                ...state,
                error: null,
                role: state.newRole
            };
        case LOGIN_ERROR:
            console.log('Log in failed');
            return {
                ...state,
                error: 'Login failed'
            };
        case LOGOUT_SUCCESS:
            console.log(state.isLoggedIn);
            return {
                ...state,
                isLoggedIn: false
            };
        case SIGN_UP_SUCCESS:
            console.log('sign up success');
            return {
                ...state
            };
        case SIGN_UP_ERROR:
            console.log('sign up error');
            return {
                ...state
            };
        case UPDATE_ERROR:
            console.log('Update error');
            return {
                ...state
            };
        case UPDATE_SUCCESSFUL:
            console.log('Update success');
            return {
                ...state
            };
        case CREATE_DISH_ERROR:
            console.log('Update error');
            return {
                ...state
            };
        case CREATE_DISH_SUCCESS:
            console.log('Update success');
            return {
                ...state
            };
        case CREATE_USER_ERROR:
            console.log('Update error');
            return {
                ...state
            };
        case CREATE_USER_SUCCESS:
            console.log('Update success');
            return {
                ...state
            };


        default:
            return state;
    };
};
export default authReducer;