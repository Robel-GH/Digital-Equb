import axios from "axios"
import {
    ADMIN_GET_BALANCE_FAIL,
    ADMIN_GET_BALANCE_SUCCESS,
    ADMIN_GET_FEEDBACK_FAIL,
    ADMIN_GET_FEEDBACK_SUCCESS,
    GET_WINNERS_FAIL,
    GET_WINNERS_SUCCESS,
    MANUAL_PAY_FAIL,
    MANUAL_PAY_SUCCESS, STATUS_CHECK_BALANCE_FAIL, STATUS_CHECK_BALANCE_SUCCESS,
    STATUS_GET_GROUP_MEMBERS_FAIL,
    STATUS_GET_GROUP_MEMBERS_SUCCESS,
    STATUS_GET_SALE_LOT_FAIL,
    STATUS_GET_SALE_LOT_SUCCESS,
    STATUS_GET_WINNERS_FAIL,
    STATUS_GET_WINNERS_SUCCESS,
    STATUS_GIVE_FEEDBACK_FAIL,
    STATUS_GIVE_FEEDBACK_SUCCESS,
    STATUS_RESET_STATE_SUCCESS,
    STATUS_SET_GROUP_CAT_ID_FAIL,
    STATUS_SET_GROUP_CAT_ID_SUCCESS
} from "../type";

export const statusGetMembersAction=()=>(dispatch, getState)=>{
    const group_id_array = getState().login.user.user_groups.map(users=>users.id);
    const group_id = group_id_array[0];
    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/get_group_members/`;

    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;


    const data = JSON.stringify({group_id});

    axios.post(url, data, config)
        .then(res=>{
            dispatch({
                type: STATUS_GET_GROUP_MEMBERS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type: STATUS_GET_GROUP_MEMBERS_FAIL,
                payload: err.data
            })
        })


};

export const statusGetWinnersAction=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const group_id_array = getState().login.user.user_groups.map(users=>users.id);
    const group_id = group_id_array;
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
                    type: STATUS_GET_WINNERS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: STATUS_GET_WINNERS_FAIL,
                    payload: err.data
                })
            })
    }

};
export const statusStateResetAction=()=>(dispatch)=>{
    dispatch({
        type: STATUS_RESET_STATE_SUCCESS
    })
};

export const statusGetSaleLots=()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const id = getState().login.user.id;
    const url = `http://127.0.0.1:8000/api/status/status/sale/get_sell_lots/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({id});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: STATUS_GET_SALE_LOT_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: STATUS_GET_SALE_LOT_FAIL,
                    payload: err.data
                })
            })
    }

};

export const statusGiveFeedbackAction = (feedback, contact)=>(dispatch, getState)=>{
    const token = getState().login.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;


        const data = JSON.stringify({feedback, contact});
        axios.post('http://127.0.0.1:8000/api/status/status/feedback/', data, config)
        .then(res=>{
            dispatch({
                type: STATUS_GIVE_FEEDBACK_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action: STATUS_GIVE_FEEDBACK_FAIL,
                payload: err.response.data
            })
        })
};

export const checkCheckBalanceAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const phone_number = getState().login.user.phone_number;
    const url = `http://127.0.0.1:8000/api/status/status/sale/balance/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

       config.headers['Authorization'] = `Token ${token}`;
       const data = JSON.stringify({phone_number});
        axios.post(url,data, config)
            .then(res => {
                dispatch({
                    type: STATUS_CHECK_BALANCE_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: STATUS_CHECK_BALANCE_FAIL,
                    payload: err.data
                })
            })
    }
};




