import {combineReducers} from "redux";


import profile from "./leads";
import errors from "./error";
import alertMessage from "./alertMessages";
import login from './accounts/login';
import joins from './join/join';
import status from './status/status';
import pay from './pay/pay';
import admin from './admin/admin';
import sale_buy from './sale_buy/sale_buy'
export default combineReducers({
    profile,
    errors,
    alertMessage,
    login,
    joins,
    status,
    pay,
    admin,
    sale_buy
})