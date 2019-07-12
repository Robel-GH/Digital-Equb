import axios from "axios";
import {
    ADMIN_ADD_AMOUNT_FAIL,
    ADMIN_ADD_AMOUNT_SUCCESS,
    ADMIN_ADD_CATEGORY_FAIL,
    ADMIN_ADD_CATEGORY_SUCCESS,
    ADMIN_ADD_DURATION_FAIL,
    ADMIN_ADD_DURATION_SUCCESS,
    ADMIN_ADD_PERIOD_SUCCESS,
    ADMIN_ADD_USER_FAIL,
    ADMIN_ADD_USER_SUCCESS,
    ADMIN_DELETE_GROUP_FAIL,
    ADMIN_DELETE_GROUP_SUCCESS,
    ADMIN_DELETE_USER_FAIL,
    ADMIN_DELETE_USER_SUCCESS,
    ADMIN_GET_ACTIVITIES_FAIL,
    ADMIN_GET_ACTIVITIES_SUCCESS,
    ADMIN_GET_AMOUNTS_FAIL,
    ADMIN_GET_AMOUNTS_SUCCESS,
    ADMIN_GET_BALANCE_FAIL,
    ADMIN_GET_BALANCE_SUCCESS,
    ADMIN_GET_CATEGORY_FAIL,
    ADMIN_GET_CATEGORY_SUCCESS,
    ADMIN_GET_DURATIONS_FAIL,
    ADMIN_GET_DURATIONS_SUCCESS,
    ADMIN_GET_FEEDBACK_FAIL,
    ADMIN_GET_FEEDBACK_SUCCESS,
    ADMIN_GET_GROUPS_FAIL,
    ADMIN_GET_GROUPS_SUCCESS,
    ADMIN_GET_PERIODS_FAIL,
    ADMIN_GET_PERIODS_SUCCESS,
    ADMIN_GET_USER_FAIL,
    ADMIN_GET_USER_SUCCESS,
    ADMIN_GET_WINNERS_FAIL,
    ADMIN_GET_WINNERS_SUCCESS, ADMIN_RESET_STATE_SUCCESS,
    GET_GROUP_DATA_FAIL,
    GET_GROUP_DATA_SUCCESS,
    STATUS_GET_WINNERS_FAIL,
    STATUS_GET_WINNERS_SUCCESS,
} from "../type";

export const adminAddUserAction = (phone_number, balance)=>(dispatch, getState)=>{
    const token = getState().login.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;
    if(balance === false){
        const data = JSON.stringify({phone_number});
        axios.post('http://127.0.0.1:8000/api/customer/book_account/',data, config)
        .then(res=>{
            dispatch({
                type: ADMIN_ADD_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:ADMIN_ADD_USER_FAIL,
                payload: err.response.data
            })
        })
    }
    else {
        const data = JSON.stringify({phone_number, balance});
        axios.post('http://127.0.0.1:8000/api/customer/book_account/',data, config)
        .then(res=>{
            dispatch({
                type: ADMIN_ADD_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action:ADMIN_ADD_USER_FAIL,
                payload: err.response.data
            })
        })

    }


};

export const adminGetFeedbackAction = ()=>(dispatch, getState)=>{
    const token = getState().login.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    config.headers['Authorization'] = `Token ${token}`;

        axios.get('http://127.0.0.1:8000/api/status/status/feedback/', config)
        .then(res=>{
            dispatch({
                type: ADMIN_GET_FEEDBACK_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                action: ADMIN_GET_FEEDBACK_FAIL,
                payload: err.response.data
            })
        })




};
export const adminGetGroupsAction = ()=>(dispatch, getState)=>{

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/`;
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
                    type: ADMIN_GET_GROUPS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_GROUPS_FAIL,
                    payload: err.data
                })
            })
    }



};

export const adminGetWinnersAction=(group_id)=>(dispatch, getState)=> {

    const token = getState().login.token;
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
                    type: ADMIN_GET_WINNERS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_WINNERS_FAIL,
                    payload: err.data
                })
            })
    }

};
export const adminDeleteGroupAction=(group_id)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/groups/${group_id}/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        axios.delete(url,config)
            .then(res => {
                dispatch({
                    type: ADMIN_DELETE_GROUP_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_DELETE_GROUP_FAIL,
                    payload: err.data
                })
            })
    }

};

export const adminAddPeriodAction = (period)=>(dispatch, getState)=>{

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/periods/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({period});
        axios.post(url,data, config)
            .then(res => {
                dispatch({
                    type: ADMIN_ADD_PERIOD_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_GROUPS_FAIL,
                    payload: err.data
                })
            })
    }



};

export const adminAddDurationAction = (duration)=>(dispatch, getState)=>{

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/month_durations/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

        config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({duration});
        axios.post(url,data, config)
            .then(res => {
                dispatch({
                    type: ADMIN_ADD_DURATION_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_ADD_DURATION_FAIL,
                    payload: err.data
                })
            })
    }


};


export const adminAddAmountAction = (amount)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/amounts/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

       config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({amount});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: ADMIN_ADD_AMOUNT_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_ADD_AMOUNT_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminAddCategoryAction = (amount, period, duration, cat_name)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/category/create_cat/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

       config.headers['Authorization'] = `Token ${token}`;
        const data = JSON.stringify({amount, period, duration, cat_name});
        axios.post(url, data, config)
            .then(res => {
                dispatch({
                    type: ADMIN_ADD_CATEGORY_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_ADD_CATEGORY_FAIL,
                    payload: err.data
                })
            })
    }
};
export const adminGetActivitiesAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/activities/`;
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
                    type: ADMIN_GET_ACTIVITIES_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_ACTIVITIES_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminGetPeriodsAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/periods/`;
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
                    type: ADMIN_GET_PERIODS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_PERIODS_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminGetDurationsAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/month_durations/`;
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
                    type: ADMIN_GET_DURATIONS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_DURATIONS_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminGetAmountsAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/amounts/`;
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
                    type: ADMIN_GET_AMOUNTS_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_AMOUNTS_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminGetCategoryAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/join/auth/category/`;
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
                    type: ADMIN_GET_CATEGORY_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_CATEGORY_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminGetUsersAction = ()=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/customer/user/`;
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
                    type: ADMIN_GET_USER_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_USER_FAIL,
                    payload: err.data
                })
            })
    }
};
export const adminDeleteUsersAction = (id)=>(dispatch, getState)=> {

    const token = getState().login.token;
    const url = `http://127.0.0.1:8000/api/customer/user/${id}/`;
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    if (token) {

       config.headers['Authorization'] = `Token ${token}`;
        axios.delete(url, config)
            .then(res => {
                dispatch({
                    type: ADMIN_DELETE_USER_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_DELETE_USER_FAIL,
                    payload: err.data
                })
            })
    }
};

export const adminCheckBalanceAction = ()=>(dispatch, getState)=> {

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
                    type: ADMIN_GET_BALANCE_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: ADMIN_GET_BALANCE_FAIL,
                    payload: err.data
                })
            })
    }
};
export const adminResetStateAction = () =>(dispatch)=>{
  dispatch({
      type:ADMIN_RESET_STATE_SUCCESS
  })
};