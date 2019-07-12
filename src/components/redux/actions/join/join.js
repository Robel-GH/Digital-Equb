import {
    LOAD_PERIODS_DATA_SUCCESS,
    LOAD_PERIODS_DATA_FAIL,
    LOAD_MONTH_DURATIONS_DATA_SUCCESS,
    LOAD_MONTH_DURATIONS_DATA_FAIL,
    LOAD_AMOUNTS_DATA_SUCCESS,
    LOAD_AMOUNTS_DATA_FAIL,
    LOAD_CATEGORY_DATA_SUCCESS,
    LOAD_CATEGORY_DATA_FAIL,
    CREATE_STATUS_SUCCESS,
    CREATE_STATUS_FAIL,
    CREATE_FIRST_PAYMENT_SUCCESS,
    GET_GROUP_DATA_SUCCESS,
    GET_GROUP_DATA_FAIL,
    SET_GROUP_NAME_SUCCESS,
    SET_GROUP_NAME_FAIL,
    GET_GROUP_MEMBERS_SUCCESS,
    GET_GROUP_MEMBERS_FAIL,
    GET_WINNERS_SUCCESS,
    GET_WINNERS_FAIL,
    CREATE_FIRST_PAYMENT_FAIL,
    LOGIN_FAIL,
    ONLINE_PAY_SUCCESS,
    ONLINE_PAY_FAIL,
    FIRST_ONLINE_PAY_SUCCESS,
    FIRST_ONLINE_PAY_FAIL,
    ONLINE_CHARGE_SUCCESS,
    ONLINE_CHARGE_FAIL,
    STATUS_SET_GROUP_CAT_ID_SUCCESS,
    SET_ONLINE_AMOUNT_SUCCESS,
    FIRST_ONLINE_CHARGE_SUCCESS,
    FIRST_ONLINE_CHARGE_FAIL,
    SALE_BUY_SET_ID_SUCCESS, JOIN_STATE_RESET_SUCCESS

} from "../type";
import axios from 'axios';



export const loadPeriodsDataAction=()=>(dispatch, getState)=>{

    const token = getState().login.token;
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    };
    if(token){
        config.headers['Authorization'] = `Token ${token}`;

        axios.get("http://127.0.0.1:8000/api/join/auth/periods/", config)
        .then(res=>{
            dispatch({
                type: LOAD_PERIODS_DATA_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type: LOAD_PERIODS_DATA_FAIL,
                payload: err.data
            })
        })
    }

};

export  const loadMonthDurationsDataAction=()=>(dispatch, getState)=>{

    const token = getState().login.token;

    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };

    if(token){
        config.headers['Authorization'] = `Token ${token}`;

        axios.get("http://127.0.0.1:8000/api/join/auth/month_durations/", config)
        .then(res=>{
            dispatch({
                type:LOAD_MONTH_DURATIONS_DATA_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:LOAD_MONTH_DURATIONS_DATA_FAIL,
                payload:err.data
            })
        })
    }

};

export  const loadAmountsDataAction=()=>(dispatch, getState)=>{

    const token = getState().login.token;

    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };

    if(token){
        config.headers['Authorization'] = `Token ${token}`;

        axios.get("http://127.0.0.1:8000/api/join/auth/amounts/", config)
        .then(res=>{
            dispatch({
                type:LOAD_AMOUNTS_DATA_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:LOAD_AMOUNTS_DATA_FAIL,
                payload:err.data
            })
        })
    }

};

export const loadCategoryAction=(cat_period, cat_duration, cat_amount)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;

        const body = JSON.stringify({cat_period, cat_duration, cat_amount});

        axios.post("http://127.0.0.1:8000/api/join/auth/category/check_category/", body, config)
            .then(res => {
                dispatch({
                    type: LOAD_CATEGORY_DATA_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: LOAD_CATEGORY_DATA_FAIL,
                    payload: err.data
                })
            })
    }

};

export const createStatusAction=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const category = getState().joins.selected_category;
    const owner = getState().login.user.phone_number;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;

        const body = JSON.stringify({owner,category});

        axios.post("http://127.0.0.1:8000/api/join/auth/status/", body, config)
            .then(res => {
                dispatch({
                    type: CREATE_STATUS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: CREATE_STATUS_FAIL,
                    payload: err.data
                })
            })
    }

};

export const firstPaymentAction=(amount)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const status_owner = getState().joins.status.id;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;

        const body = JSON.stringify({status_owner,amount});

        axios.post("http://127.0.0.1:8000/api/join/auth/first_payment/", body, config)
            .then(res => {
                dispatch({
                    type: CREATE_FIRST_PAYMENT_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                const error ={
                      'msg': err.response,
                      'status': err.response
                  };
                  dispatch({
                      type: CREATE_FIRST_PAYMENT_FAIL,
                      payload: error
                  })
            })
    }

};

export const getGroupDataAction=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const id = getState().joins.group_id;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/${id}/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        axios.get(url, config)
            .then(res => {
                dispatch({
                    type: GET_GROUP_DATA_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_GROUP_DATA_FAIL,
                    payload: err.data
                })
            })
    }

};

export const setGroupNameAction=(group_name)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const group_id = getState().joins.group_id;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/set_group_name/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    const data=JSON.stringify({group_id,group_name});
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: SET_GROUP_NAME_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: SET_GROUP_NAME_FAIL,
                    payload: err.data
                })
            })
    }

};
export const getGroupMembersAction=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const group_id = getState().joins.group_id;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/get_group_members/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({group_id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: GET_GROUP_MEMBERS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_GROUP_MEMBERS_FAIL,
                    payload: err.data
                })
            })
    }

};
export const getWinnersAction=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const group_id = getState().joins.group_id;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/get_winners/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({group_id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: GET_WINNERS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_WINNERS_FAIL,
                    payload: err.data
                })
            })
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
                type: FIRST_ONLINE_PAY_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:FIRST_ONLINE_PAY_FAIL,
                payload: err.response.data
            })
        })
};

export const stripeCharges = (source, email)=>(dispatch, getState)=>{

    const token = getState().login.token;
    const amount = getState().joins.online_amount;
    const status_owner = getState().joins.status.id;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;

        const body = JSON.stringify({status_owner,amount, source, email});

        axios.post("http://127.0.0.1:8000/api/join/auth/first_payment/online/", body, config)
            .then(res => {
                dispatch({
                    type: FIRST_ONLINE_CHARGE_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                const error ={
                      'msg': err.response,
                      'status': err.response
                  };
                  dispatch({
                      type: FIRST_ONLINE_CHARGE_FAIL,
                      payload: error
                  })
            })
    }


};

export const setSelectedAmount=(amount)=>(dispatch)=>{

        dispatch({
            type:SET_ONLINE_AMOUNT_SUCCESS,
            payload: amount
        });


};
export const joinStateResetAction=()=>(dispatch)=>{
    dispatch({
        type: JOIN_STATE_RESET_SUCCESS,
    })
};

