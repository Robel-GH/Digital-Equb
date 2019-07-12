import {
    LOGIN_USER_LOADED,
    LOGIN_USER_LOADING,
    LOGIN_AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    CONFIRM_USER_FAIL,
    CONFIRM_USER_SUCCESS,
    CONFIRM_PHONE_SUCCESS,
    CONFIRM_PHONE_FAIL,
    CONFIRM_LEGAL_FAIL,
    CONFIRM_LEGAL_SUCCESS,
    GET_CURRENT_DATE_TIME_FAIL,
    GET_CURRENT_DATE_TIME_SUCCESS, GET_UPDATED_USER_SUCCESS
} from "../../actions/type";

const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:false,
    isLoading:false,
    user:{},
    isConfirmed:false,
    isOtpSent:false,
    isLegalConfirmed:false,
    phone:null,
    accounts_error: {},
    legal_confirm_error: {},
    otp_received_detail: {},
    current_date: false
};

export default function (state=initialState, action) {
    switch (action.type) {
        case LOGIN_USER_LOADING:{
            return {
                ...state,isLoading: true
            }
        }
        case LOGIN_USER_LOADED:{
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                isLoading:false,
                isOtpSent: false,
            }
        }
        case LOGIN_AUTH_ERROR: {
            localStorage.removeItem('token');
            return {
                ...state,
                user:{},
                isLoading:false,
                isAuthenticated:false,
                token: null,
                isConfirmed: false,
                isOtpSent:false,
            }
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload.user,
                token:action.payload.token,
                isConfirmed:true,
                isOtpSent:false,
            }

        }
        case GET_CURRENT_DATE_TIME_SUCCESS:{
            return {
                ...state, current_date: action.payload.data
            }
        }
        case GET_CURRENT_DATE_TIME_FAIL:
        case CONFIRM_LEGAL_FAIL:
        case CONFIRM_PHONE_FAIL:
        case CONFIRM_USER_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            {
            localStorage.removeItem('token');
            return {
                ...state,
                isAuthenticated:false,
                isLoading:false,
                token:null,
                user:{},
                isConfirmed:false,
                isOtpSent:false,
                phone:null,

            }
        }

        case LOGOUT_FAIL:{
            return{
                ...state,
            }
        }
        case LOGIN_FAIL:{
            return{
                ...state,
                accounts_error: action.payload.msg
            }
        }
        case REGISTER_SUCCESS:{
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload.user,
                token:action.payload.token,
                isConfirmed:true,
                isOtpSent:false,
            }
        }
        case CONFIRM_USER_SUCCESS:{
            return {
                ...state,
                isConfirmed:true,
                isOtpSent:false,
                otp_received_detail: action.payload
            }
        }
        case CONFIRM_PHONE_SUCCESS:{
            return {
                ...state,
                isOtpSent:true,
                isConfirmed:false,
                isLegalConfirmed:false
            }
        }

        case CONFIRM_LEGAL_SUCCESS:{
            return {
                ...state,
                isLegalConfirmed: action.payload.data.data,
                phone: action.payload.data.phone_number,
                legal_confirm_error: action.payload.data
            }
        }

        case GET_UPDATED_USER_SUCCESS:{
            return {
                ...state, user:action.payload
            }
        }
        default:{
            return state;
        }
    }
};