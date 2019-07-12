import axios from "axios";
import {
    ONLINE_CHARGE_FAIL,
    ONLINE_CHARGE_SUCCESS,
    ONLINE_PAY_FAIL,
    ONLINE_PAY_SUCCESS,
    SALE_BUY_BUY_FAIL,
    SALE_BUY_Buy_PayManual_FAIL,
    SALE_BUY_Buy_PayManual_SUCCESS,
    SALE_BUY_BUY_SUCCESS,
    SALE_BUY_GET_PREPAYMENT_FAIL,
    SALE_BUY_GET_PREPAYMENT_SUCCESS,
    SALE_BUY_ONLINE_CHARGE_FAIL, SALE_BUY_ONLINE_CHARGE_SUCCESS, SALE_BUY_ONLINE_PAY_FAIL,
    SALE_BUY_ONLINE_PAY_SUCCESS,
    SALE_BUY_SELL_FAIL,
    SALE_BUY_SELL_SUCCESS,
    SALE_BUY_SET_ID_SUCCESS, SALE_BUY_STATE_RESET_SUCCESS,
    SALE_SET_GROUP_CAT_ID_SUCCESS,
} from "../type";

export const saleSetSelectedCatAndGroupId=(g_id, cat_id, season)=>(dispatch)=>{

        const data = {
      "g_id": g_id,
      "cat_id": cat_id,
      "season": season
        };
        console.log(g_id, cat_id , season);
        dispatch({
            type:SALE_SET_GROUP_CAT_ID_SUCCESS,
            payload: data
        });




};
export const salebuySaleAction=(purchase_amount)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const group_id = getState().sale_buy.sale_group_id;
    const cat_id = getState().sale_buy.sale_cat_id;
    const user_id =  getState().login.user.id;
    const season = getState().sale_buy.sale_season;
    const url = `http://127.0.0.1:8000/api/sale_buy/sale_buy/main/`;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({group_id,user_id,cat_id,purchase_amount,season});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: SALE_BUY_SELL_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: SALE_BUY_SELL_FAIL,
                    payload: err.data
                })
            })
    }


};

export const salebuyBuyAction=(id)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const user_id = getState().login.user.id;
    const url = `http://127.0.0.1:8000/api/sale_buy/sale_buy/main/buy/`;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({user_id, id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: SALE_BUY_BUY_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: SALE_BUY_BUY_FAIL,
                    payload: err.data
                })
            })
    }
};

export const salebuyBuyGetPrePayment=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const sale_buy_id = getState().sale_buy.sale_buy_id;
    const url = `http://127.0.0.1:8000/api/sale_buy/sale_buy/main/pre_payment/`;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({sale_buy_id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: SALE_BUY_GET_PREPAYMENT_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: SALE_BUY_GET_PREPAYMENT_FAIL,
                    payload: err.data
                })
            })
    }
};
export const setSaleBuyIdAction=(id)=>(dispatch, getState)=>{
    dispatch({
        type: SALE_BUY_SET_ID_SUCCESS, payload: id
    })
};

export const salebuyBuyPayManual=()=>(dispatch, getState)=> {
    const token = getState().login.token;
    const sale_buy_id = getState().sale_buy.sale_buy_id;
    const pre_payment = getState().sale_buy.pre_payment;
    const user_id = getState().login.user.id;
    const url = `http://127.0.0.1:8000/api/sale_buy/sale_buy/main/pay_manual/`;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({sale_buy_id, pre_payment, user_id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: SALE_BUY_Buy_PayManual_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: SALE_BUY_Buy_PayManual_FAIL,
                    payload: err.data
                })
            })
    }
};
export const saleBuyGetStripePubkey = ()=>(dispatch, getState)=>{
    const token = getState().login.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;

    axios.get('http://127.0.0.1:8000/api/payments/payment/pay/online/', config)
        .then(res=>{
            dispatch({
                type: SALE_BUY_ONLINE_PAY_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:SALE_BUY_ONLINE_PAY_FAIL,
                payload: err.response.data
            })
        })
};

export const saleBuyStripeCharge = (source, email)=>(dispatch, getState)=>{

    const token = getState().login.token;
    const sale_buy_id = getState().sale_buy.sale_buy_id;
    const pre_payment = getState().sale_buy.pre_payment;
    const user_id = getState().login.user.id;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;

    const data = JSON.stringify({source, email, sale_buy_id, pre_payment, user_id});
    axios.post('http://127.0.0.1:8000/api/sale_buy/sale_buy/main/pay_online/',data,config)
        .then(res=>{
            dispatch({
                type: SALE_BUY_ONLINE_CHARGE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:SALE_BUY_ONLINE_CHARGE_FAIL,
                payload: err.response.data
            })
        })
};
export const saleBuyStateResetAction=()=>(dispatch)=>{
    dispatch({
        type: SALE_BUY_STATE_RESET_SUCCESS
    })
};