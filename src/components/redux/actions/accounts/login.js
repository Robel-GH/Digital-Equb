import {
    LOGIN_AUTH_ERROR,
    LOGIN_USER_LOADED,
    LOGIN_USER_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CONFIRM_USER_SUCCESS,
    CONFIRM_USER_FAIL,
    CONFIRM_PHONE_SUCCESS,
    CONFIRM_PHONE_FAIL,
    CONFIRM_LEGAL_SUCCESS,
    CONFIRM_LEGAL_FAIL,
    GET_CURRENT_DATE_TIME_SUCCESS,
    GET_CURRENT_DATE_TIME_FAIL, GET_UPDATED_USER_SUCCESS, GET_UPDATED_USER_FAIL,UPDATE_USER_PROFILE_SUCCESS, UPDATE_USER_PROFILE_FAIL
} from "../type";
import axios from "axios"
export const loadUser=()=>(dispatch, getState)=>{
    // This statement makes isLoading state value to true
    dispatch({type:LOGIN_USER_LOADING});

    const token=getState().login.token;

    const config={
        headers:{
            "Content-Type":"application/json"
        }
    };

    if(token){
        config.headers["Authorization"]=`Token ${token}`
    }
    axios.get("http://127.0.0.1:8000/api/customer/logout/",config)
        .then(res=>{
            dispatch({
                type:LOGIN_USER_LOADED,
                payload:res.data
            })
        })
        .catch(res=>{
            dispatch({
                type:LOGIN_AUTH_ERROR,
                payload: res.data
            })
        })

};

export const userLogin=(phone_number, password)=>dispatch=>{
  dispatch({type:LOGIN_USER_LOADING});

 const config={
        headers:{
            "Content-Type":"application/json"
        }
    };
  const body=JSON.stringify({phone_number,password});

  axios.post("http://127.0.0.1:8000/api/customer/login/",body,config)
      .then(res=>{
          dispatch({
              type:LOGIN_SUCCESS,
              payload:res.data,
          })

      })
    .catch(err=>{
                  const error ={
                      'msg': err.response.data,
                      'status': err.response.data
                  };
                  dispatch({
                      type:LOGIN_FAIL,
                      payload: error
                  })
              })
};

//Register action handler
export const registerAction=(first_name,last_name,email,phone_number,password, account_number)=>dispatch=>{
  const config={
      headers:{
          "Content-Type":"application/json"
      }
  };
  const data = {
    "first_name": first_name,
    "last_name": last_name,
    "email": "",
    "password": password,
    "book": {
        "phone_number": phone_number,
        "balance": null,
        "account_number": account_number
    }
};
  // const body=JSON.stringify({first_name,last_name,email,password, book});

  axios.post("http://127.0.0.1:8000/api/customer/register/form/",data,config)
      .then(res=>{
          dispatch({
              type:REGISTER_SUCCESS,
              payload:res.data
          })
      })
      .catch(err=>{
          dispatch({
              type:REGISTER_FAIL,
              payload:err.data
          })
      })
};

// Logout action handler
export const logoutAction=()=>(dispatch,getState)=>{

    const token=getState().login.token;
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    };
    if(token) {
        config.headers["Authorization"] = `Token ${token}`;
    }
    axios.post("http://127.0.0.1:8000/api/customer/logout/", null, config)
        .then(res=>{
            dispatch({
                type:LOGOUT_SUCCESS
            })
        })
        .catch(err=>{
            console.log('Logout error', err.data)
            dispatch({
                type:LOGOUT_FAIL,
                payload:err.data
            })
        })
};

// ConfirmUser action
export const confirmUserAction=(otp,phone_number)=>dispatch=>{
    const config={
        headers:{
            "Content-type":"application/json"
        }
    };
    const body=JSON.stringify({otp,phone_number});

    axios.post("http://127.0.0.1:8000/api/customer/register/confirm/",body,config)
        .then(res=>{
            dispatch({
                type:CONFIRM_USER_SUCCESS,
                payload:res.data
            })
        })
        .catch(err=>{
            dispatch({
                type:CONFIRM_USER_FAIL,
                payload:err.data
            })
        })

};
export const sendOtpAction=(phone_number)=>dispatch=>{
    const config={
        headers:{
            "Content-Type":"application/json"
        }
    };
  const body=JSON.stringify({phone_number});


    axios.post("http://127.0.0.1:8000/api/customer/register/",body,config)
        .then(res=>{
            if(res.data.status) {
                dispatch({
                    type: CONFIRM_PHONE_SUCCESS,
                    payload: res.data
                })
            }
            else if(!res.data.status) {
                dispatch({
                    type: CONFIRM_PHONE_FAIL,
                    payload: res.data.detail
                })
            }


        })
        .catch(err=>{
            dispatch({
                type:CONFIRM_PHONE_FAIL,
                payload:err.data
            })
        })

};

export const confirmLegalCredentialAction=(phone_number, account_number)=>(dispatch)=>{

    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };

    const data = JSON.stringify({phone_number, account_number});
    axios.post("http://127.0.0.1:8000/api/customer/register/form/check_manual_credential/",data,config)
        .then(res=>{
            dispatch({
                type: CONFIRM_LEGAL_SUCCESS,
                payload: res
            })
        })
        .catch(err=>{
            dispatch({
                type: CONFIRM_LEGAL_FAIL,
                payload: err.data
            })
        })

};
export const getCurrentDateTime=()=>(dispatch)=>{

    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };

    axios.get("http://127.0.0.1:8000/api/customer/register/form/get_current_datetime/",config)
        .then(res=>{
            dispatch({
                type: GET_CURRENT_DATE_TIME_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type: GET_CURRENT_DATE_TIME_FAIL,
                payload: err.data
            })
        })

};

export const updateUserAction=()=>(dispatch, getState)=>{

  const token = getState().login.token;
  const id = getState().login.user.id;
  const config={
        headers:{
            "Content-Type":"application/json"
        }
    };
  const url = `http://127.0.0.1:8000/api/customer/user/${id}/`;
  config.headers['Authorization'] = `Token ${token}`;

  axios.get(url,config)
      .then(res=>{
          dispatch({
              type: GET_UPDATED_USER_SUCCESS,
              payload:res.data,
          })

      })
    .catch(err=>{

                  dispatch({
                      type:GET_UPDATED_USER_FAIL,
                      payload: err
                  })
              })
};
export const updateUserProfileAction=(first_name,last_name,email,phone_number,password)=>(dispatch, getState)=>{

    const user_id = getState().login.user.id;
    const token = getState().login.token;

    const url = `http://127.0.0.1:8000/api/customer/user/${user_id}/`;
    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    };
    config.headers["Authorization"] = `Token ${token}`;

    const data = JSON.stringify({first_name,last_name,email,phone_number,password});
    axios.put(url,data,config)
        .then(res=>{
            dispatch({
                type: UPDATE_USER_PROFILE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err=>{
            dispatch({
                type: UPDATE_USER_PROFILE_FAIL,
                payload: err.response.data
            })
        })

};
