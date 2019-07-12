import React,{Fragment} from 'react';
import Header from "./components/Header";
import Dashboard from "./components/accounts/Dashbord";
import Alert from "./components/leads/Alerts";
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from "react-redux";
import configureStore from "./components/redux/Store";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from "./components/accounts/Register"
import Login from "./components/accounts/Login";
import Join from "./components/join/Join"
import PrivateRoute from "./components/common/PrivateRoute"
import FirstPayment from "./components/join/FirstPayment";
import Group from "./components/join/Group";
import PaymentChoice from "./components/join/PaymentChoice";
import Status from "./components/status/Status";
import PaymentDashboard from "./components/pay/PaymentDashboard";
import PayManual from "./components/pay/PayManual";
import PayOnline from"./components/pay/PayOnline";
import FirstPayOnline from "./components/join/FirstPayOnline";
import AdminDashbord from "./components/admin/AdminDashbord";
import AddUser from "./components/admin/AddUser";
import Feedbacks from "./components/admin/Feedbacks";
import ManageGroups from "./components/admin/ManageGroups";
import Sale from "./components/sale_buy/Sale";
import Buy from "./components/sale_buy/Buy";
import SaleBuyPayManual from "./components/sale_buy/SaleBuyPayManual";
import SaleBuyPayOnline from "./components/sale_buy/SaleBuyPayOnline";
import AddPeriod from "./components/admin/AddPeriod";
import AddDuration from "./components/admin/AddDuration";
import AddAmount from "./components/admin/AddAmount";
import AddCategory from "./components/admin/AddCategory";
import Activities from "./components/admin/Activities";
import ManageUser from "./components/admin/ManageUser";
import Balance from "./components/admin/Balance";
import ErrorNotFound from "./ErrorNotFound";
import User from "./layouts/User/User";
import Admin from "./layouts/Admin/Admin";
import AllRoute from "./AllRoute";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};

function App() {
  return (
    <div className="App">

          <Provider store={configureStore}>
              <AlertProvider template={AlertTemplate} {...options}>
                  <Router>
                      <Fragment>
                          {/*<Header/>*/}
                            <Alert/>
                            <div className="container-fluid">
                                <Switch>

                                    <Route exact path="/signup" component={Register}/>
                                   <Route exact path="/login" component={Login}/>
                                   <Route exact path="/" component={Login}/>
                                   {/*<Route  path="/ዘ-EQUB/" render={props =><User {...props}/>}/>*/}
                                   {/*<Route  path="/ዘ-EQUB/admin/" render={props =><Admin {...props}/>}/>*/}
                                    <AllRoute/>
                                    <Route path="*" component={ErrorNotFound} />

                                </Switch>
                            </div>
                      </Fragment>
                  </Router>
              </AlertProvider>
          </Provider>
    </div>
  );
}

export default App;
