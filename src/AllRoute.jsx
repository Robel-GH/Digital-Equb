import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from "./components/accounts/Register"
import Login from "./components/accounts/Login";
// import Join from "./components/join/Join"
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

import User from "./layouts/User/User";
import Admin from "./layouts/Admin/Admin";
import {Component, Fragment} from "react";
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ProtectedRoute from "./ProtectedRoute";
import Alert from "./App";
import ErrorNotFound from "./ErrorNotFound";
import {Provider as AlertProvider} from "react-alert";

class AllRoute extends Component{
    static  propTypes = {
            login : PropTypes.array
        };

    render() {
        return(
                <>
                                    {(()=>{
                                        if(this.props.login.isAuthenticated && this.props.login.user.is_staff === true){
                                            return(
                                            <Route path="/ዘ-EQUB/admin" render={props => <Admin {...props} />}/>)
                                        }
                                        else{
                                            return(
                                            <Route path="/ዘ-EQUB" render={props => <User {...props} />}/>)
                                        }
                                    })()}

            </>


        );
    }
}

const mapStateToProps=state=>({
   login:state.login
});

export default connect(mapStateToProps)(AllRoute);

