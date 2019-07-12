import {
    LOAD_PERIODS_DATA_SUCCESS,
    LOAD_PERIODS_DATA_FAIL,
    LOAD_MONTH_DURATIONS_DATA_SUCCESS,
    LOAD_MONTH_DURATIONS_DATA_FAIL,
    LOAD_AMOUNTS_DATA_SUCCESS,
    LOAD_AMOUNTS_DATA_FAIL,
    LOAD_CATEGORY_DATA_FAIL,
    LOAD_CATEGORY_DATA_SUCCESS,
    CREATE_STATUS_FAIL,
    CREATE_STATUS_SUCCESS,
    CREATE_FIRST_PAYMENT_FAIL,
    CREATE_FIRST_PAYMENT_SUCCESS,
    GET_GROUP_DATA_FAIL,
    GET_GROUP_DATA_SUCCESS,
    SET_GROUP_NAME_FAIL,
    SET_GROUP_NAME_SUCCESS,
    GET_GROUP_MEMBERS_FAIL,
    GET_GROUP_MEMBERS_SUCCESS,
    GET_WINNERS_SUCCESS,
    GET_WINNERS_FAIL,
    ONLINE_PAY_SUCCESS,
    ONLINE_PAY_FAIL,
    FIRST_ONLINE_PAY_FAIL,
    FIRST_ONLINE_PAY_SUCCESS,
    SET_ONLINE_AMOUNT_SUCCESS,
    FIRST_ONLINE_CHARGE_SUCCESS,
    FIRST_ONLINE_CHARGE_FAIL, JOIN_STATE_RESET_SUCCESS

} from "../../actions/type";

const initialState = {
    all_periods: [],
    all_month_durations: [],
    all_amounts: [],
    error_load_join: [],
    selected_category:null,
    join_error: "",
    status:null,
    group_id:null,
    group_data:[],
    group_data_loaded: false,
    groups_name:null,
    group_members:[],
    is_new_group:null,
    is_members_loaded:false,
    winners:[],
    is_winners_loaded: false,
    load_cat_err: {},
    first_payment_err: {},
    stripe_pub_key: false,
    is_charged: false,
    online_amount: false,
    is_online_amount: true


};

export default function (state=initialState, action) {

    switch (action.type) {
        case LOAD_PERIODS_DATA_SUCCESS:{
            return{
                ...state,all_periods: action.payload,

            }
        }

        case LOAD_MONTH_DURATIONS_DATA_SUCCESS:{
            return{
                ...state,all_month_durations: action.payload
            }
        }
        case LOAD_AMOUNTS_DATA_SUCCESS:{
            return{
                ...state,all_amounts: action.payload
            }
        }
        case LOAD_CATEGORY_DATA_SUCCESS:{
            return {
                ...state, selected_category: action.payload.data, load_cat_err: action.payload
            }
        }
        case CREATE_STATUS_SUCCESS:{
            return {
                ...state, status:action.payload.data
            }
        }
        case CREATE_FIRST_PAYMENT_SUCCESS:{
            return {
                ...state, group_id: action.payload.data.g_id, is_new_group: action.payload.data.check_new_group, first_payment_err: action.payload
            }
        }

        case GET_GROUP_DATA_SUCCESS:{
            return {
                ...state, group_data: action.payload,groups_name:action.payload.group_name,group_data_loaded: true,
            }
        }

        case SET_GROUP_NAME_SUCCESS:{
            return {
                ...state, groups_name: action.payload.data,

            }
        }
        case GET_GROUP_MEMBERS_SUCCESS:{
            return {
                ...state, group_members: action.payload.data, is_members_loaded: true
            }
        }

        case GET_WINNERS_SUCCESS:{
            return {
                ...state,winners: action.payload.data, is_winners_loaded: true
            }
        }

        case FIRST_ONLINE_PAY_SUCCESS:{
            return {
                ...state, stripe_pub_key: action.payload.pub_key
            }
        }
        case SET_ONLINE_AMOUNT_SUCCESS:{
            return {
                ...state, online_amount: action.payload, is_online_amount: false
            }
        }
        case FIRST_ONLINE_CHARGE_SUCCESS:{
            return {
                ...state, group_id: action.payload.data.g_id, is_new_group: action.payload.data.check_new_group, first_payment_err: action.payload
            }
        }
        case JOIN_STATE_RESET_SUCCESS:{
            return {
                all_periods: [],
    all_month_durations: [],
    all_amounts: [],
    error_load_join: [],
    selected_category:null,
    join_error: "",
    status:null,
    group_id:null,
    group_data:[],
    group_data_loaded: false,
    groups_name:null,
    group_members:[],
    is_new_group:null,
    is_members_loaded:false,
    winners:[],
    is_winners_loaded: false,
    load_cat_err: {},
    first_payment_err: {},
    stripe_pub_key: false,
    is_charged: false,
    online_amount: false,
    is_online_amount: true
            }
        }

        case FIRST_ONLINE_CHARGE_FAIL:
        case FIRST_ONLINE_PAY_FAIL:
        case GET_GROUP_MEMBERS_FAIL:
        case SET_GROUP_NAME_FAIL:
        case GET_GROUP_DATA_FAIL:
        case CREATE_FIRST_PAYMENT_FAIL:
        case CREATE_STATUS_FAIL:
        case LOAD_CATEGORY_DATA_FAIL:
        case LOAD_PERIODS_DATA_FAIL:
        case LOAD_AMOUNTS_DATA_FAIL:
        case LOAD_MONTH_DURATIONS_DATA_FAIL:{
            return{
                ...state,join_error: action.payload, all_periods: [],
    all_month_durations: [],
    all_amounts: [],
    error_load_join: [],
    selected_category:null,
    status:null,
    group_id:null,
    group_data:[],
    group_data_loaded: false,
    groups_name:null,
    group_members:[],
    is_new_group:null,
    is_members_loaded:false,
    winners:[],
    is_winners_loaded: false,
    load_cat_err: {},
    first_payment_err: {},
    stripe_pub_key: false,
    is_charged: false,
    online_amount: false,
    is_online_amount: true

            }
        }
        default:{
            return {...state}
        }
    }
};

