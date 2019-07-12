import axios from "axios";
import {
    GET_SELECTED_AMOUNT_FAILL,
    GET_SELECTED_AMOUNT_SUCCESS, JOIN_STATE_RESET_SUCCESS,
    MANUAL_PAY_FAIL,
    MANUAL_PAY_SUCCESS, ONLINE_CHARGE_FAIL, ONLINE_CHARGE_SUCCESS,
    ONLINE_PAY_FAIL,
    ONLINE_PAY_SUCCESS, PAY_STATE_RESET_ACTION,
    STATUS_SET_GROUP_CAT_ID_SUCCESS
} from "../type";

export const manualPayAction=()=>(dispatch, getState)=>{
    const token = getState().login.token;
    const group_id = getState().pay.selected_group_id;
    const cat_id = getState().pay.selected_cat_id;
    const user_id =  getState().login.user.id;
    const url = `http://127.0.0.1:8000/api/payments/payment/pay/manual/`;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({group_id,user_id,cat_id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: MANUAL_PAY_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: MANUAL_PAY_FAIL,
                    payload: err.data
                })
            })
    }

};

export const setSelectedCatAndGroupId=(g_id, cat_id)=>(dispatch)=>{
    if (g_id && cat_id){

        const data = {
      "g_id": g_id,
      "cat_id": cat_id
        };

        dispatch({
            type:STATUS_SET_GROUP_CAT_ID_SUCCESS,
            payload: data
        });
    }



};

export const getStripePubkey = ()=>(dispatch, getState)=>{
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
                type: ONLINE_PAY_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:ONLINE_PAY_FAIL,
                payload: err.response.data
            })
        })
};

export const stripeCharge = (source, email)=>(dispatch, getState)=>{

    const token = getState().login.token;

    const group_id = getState().pay.selected_group_id;
    const cat_id = getState().pay.selected_cat_id;
    const user_id =  getState().login.user.id;
    const amount = getState().pay.selected_amount;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;

    const data = JSON.stringify({source, email, amount, group_id, cat_id, user_id});
    axios.post('http://127.0.0.1:8000/api/payments/payment/pay/charge/',data,config)
        .then(res=>{
            dispatch({
                type: ONLINE_CHARGE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:ONLINE_CHARGE_FAIL,
                payload: err.response.data
            })
        })
};

export const getSelectedAmount = ()=>(dispatch, getState)=>{
    const token = getState().login.token;
    const cat_id = getState().pay.selected_cat_id;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;
    const data = JSON.stringify({cat_id});
    axios.post('http://127.0.0.1:8000/api/payments/payment/pay/category/',data, config)
        .then(res=>{
            dispatch({
                type: GET_SELECTED_AMOUNT_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:GET_SELECTED_AMOUNT_FAILL,
                payload: err.response.data
            })
        })
};
export const payStateResetAction=()=>(dispatch)=>{
    dispatch({
        type: PAY_STATE_RESET_ACTION,
    })
};