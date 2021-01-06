import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

import  NavigationBar from "../src/Components/Navigation/Navbar"
import {ManagerMenu} from "./Pages/ManagerPages/ManagerMenu";
import {ChefMenu} from "./Pages/ChefPages/ChefMenu";
import {WaiterMenu} from "./Pages/WaiterPages/WaiterMenu";
import ChefOrders from "./Pages/ChefPages/ChefOrders";
import {WaiterChooseTable} from "./Pages/WaiterPages/WaiterChooseTable";
import WaiterOrders from "./Pages/WaiterPages/WaiterOrders";
import {WaiterCreateOrder} from "./Pages/WaiterPages/WaiterCreateOrder";
import ManagerManageDishes from "./Pages/ManagerPages/ManagerManageDishes";
import ManagerAddNewDish from "./Components/managerComponents/ManagerAddNewDish";
import {ManagerDishMenu} from "./Pages/ManagerPages/ManaggerDishesMenu";
import {ManagerUserMenu} from "./Pages/ManagerPages/ManagerUserMenu";
import ManagerAddNewUser from "./Components/managerComponents/ManagerAddNewUser";
import ManagerManageUser from "./Pages/ManagerPages/ManagerManageUser";
import LogInPage from "./Pages/LogInPage";
import {UserIsAuthenticated} from "./Components/Navigation/UserIsAuthenticated";


import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated or if auth is not
// yet loaded
function PrivateRoute({ children, UserType, ...rest }) {
    const auth = useSelector(state => state.firebase.auth);
    const profile = useSelector(state => state.firebase.profile);
    console.log(profile.role, auth);

    if (!isLoaded(auth) || profile.role) return <div>splash screen...</div>;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoaded(auth) && !isEmpty(auth) && profile.role === UserType ? (
                    children
                ) : (
                    <Redirect to={{
                pathname: "/login",
                state: { from: location }
            }}
                    />
                )
            }
        />
    );
}





function App() {
  return (

      <BrowserRouter>
        <div>
            <NavigationBar/>

          <Switch>
              <Route path={"/login"} component={LogInPage} />

              <Route path={"/managerMenu"} component={UserIsAuthenticated(ManagerMenu)} />
              <Route path={"/managerManageDishes"}  component={UserIsAuthenticated(ManagerManageDishes)} />
              <Route path={"/managerManageUsers"} component={UserIsAuthenticated(ManagerManageUser)} />
              <Route path={"/managerAddNewDish"}  UserType="Manager"><ManagerAddNewDish/></Route>
              <Route path={"/managerDishMenu"} UserType="Manager" ><ManagerDishMenu/></Route>
            <Route path={"/managerUserMenu"} component={UserIsAuthenticated(ManagerUserMenu)} UserType="Manager"/>
            <Route path={"/managerAddNewUser"} component={ManagerAddNewUser} UserType="Manager"/>
            <Route path={"/managerManageUser"} component={ManagerManageUser} UserType="Manager"/>



              <PrivateRoute path={"/waiterMenu"}  UserType="Waiter"><WaiterMenu/></PrivateRoute>
              <PrivateRoute path={"/waiterChooseTable"}  UserType="Waiter"><WaiterChooseTable/></PrivateRoute>
              <PrivateRoute path={"/waiterOrders"}  UserType="Waiter"><WaiterOrders/></PrivateRoute>
              <PrivateRoute path={"/waiterCreateOrder"} UserType="Waiter"><WaiterCreateOrder/></PrivateRoute>

              <Route path={"/chefMenu"} component={ChefMenu} UserType="Chef"/>
              <Route path={"/chefOrders"} component={ChefOrders} UserType="Chef"/>
          </Switch>

        </div>
      </BrowserRouter>
  );
}

export default App;
