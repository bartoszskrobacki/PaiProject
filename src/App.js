import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import  NavigationBar from "../src/Components/Navigation/Navbar"
import {ManagerMenu} from "./Pages/ManagerPages/ManagerMenu";
import {ChefMenu} from "./Pages/ChefPages/ChefMenu";
import {WaiterMenu} from "./Pages/WaiterPages/WaiterMenu";
import ChefOrders from "./Pages/ChefPages/ChefOrders";
import {WaiterChooseTable} from "./Pages/WaiterPages/WaiterChooseTable";
import WaiterOrders from "./Pages/WaiterPages/WaiterOrders";
import WaiterCreateOrder from "./Pages/WaiterPages/WaiterCreateOrder";
import ManagerManageDishes from "./Pages/ManagerPages/ManagerManageDishes";
import ManagerAddNewDish from "./Components/managerComponents/ManagerAddNewDish";
import {ManagerDishMenu} from "./Pages/ManagerPages/ManaggerDishesMenu";
import {ManagerUserMenu} from "./Pages/ManagerPages/ManagerUserMenu";
import ManagerAddNewUser from "./Components/managerComponents/ManagerAddNewUser";
import ManagerManageUser from "./Pages/ManagerPages/ManagerManageUser";
import LogInPage from "./Pages/LogInPage";
import {UserIsManager, UserIsChef, UserIsWaiter} from "./Components/Navigation/UserIsAuthenticated";
import {ManagerReports} from "./Pages/ManagerPages/ManagerReports"
import {ManagerDailyReport} from "./Pages/ManagerPages/ManagerDailyReport";
import {WaiterDailyReport} from "./Pages/WaiterPages/WaiterDailyReport";
import ManagerOrders from "./Pages/ManagerPages/ManagerOrders";





function App() {
  return (

      <BrowserRouter>
        <div>
            <NavigationBar/>
          <Switch>

              <Route path={"/login"} component={LogInPage} />
              <Route path={"/managerMenu"} component={UserIsManager(ManagerMenu)} />
              <Route path={"/managerOrders"} component={UserIsManager(ManagerOrders)} />
              <Route path={"/managerManageDishes"}  component={UserIsManager(ManagerManageDishes)} />
              <Route path={"/managerManageUsers"} component={UserIsManager(ManagerManageUser)} />
              <Route path={"/managerAddNewDish"}  component={UserIsManager(ManagerAddNewDish)} />
              <Route path={"/managerDishMenu"} component={UserIsManager(ManagerDishMenu)} />
              <Route path={"/managerUserMenu"} component={UserIsManager(ManagerUserMenu)}/>
              <Route path={"/managerAddNewUser"} component={UserIsManager(ManagerAddNewUser)}/>
              <Route path={"/managerManageUser"} component={UserIsManager(ManagerManageUser)}/>
              <Route path={"/managerReports"} component={UserIsManager(ManagerReports)} />
              <Route path={"/managerDailyReport"} component={UserIsManager(ManagerDailyReport)} />

              <Route path={"/waiterMenu"} component={UserIsWaiter(WaiterMenu)} />
              <Route path={"/waiterChooseTable"}  component={UserIsWaiter(WaiterChooseTable)} />
              <Route path={"/waiterOrders"}  component={UserIsWaiter(WaiterOrders)} />
              <Route path={"/waiterCreateOrder"} component={UserIsWaiter(WaiterCreateOrder)} />
              <Route path={"/waiterDailyReport"}  component={UserIsWaiter(WaiterDailyReport)} />

              <Route path={"/chefMenu"} component={UserIsChef(ChefMenu)} />
              <Route path={"/chefOrders"} component={UserIsChef(ChefOrders)}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
