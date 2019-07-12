import {
    ADMIN_ADD_AMOUNT_FAIL,
    ADMIN_ADD_AMOUNT_SUCCESS, ADMIN_ADD_CATEGORY_FAIL,
    ADMIN_ADD_CATEGORY_SUCCESS, ADMIN_ADD_DURATION_FAIL,
    ADMIN_ADD_DURATION_SUCCESS, ADMIN_ADD_PERIOD_FAIL,
    ADMIN_ADD_PERIOD_SUCCESS,
    ADMIN_ADD_USER_FAIL,
    ADMIN_ADD_USER_SUCCESS,
    ADMIN_DELETE_GROUP_FAIL,
    ADMIN_DELETE_GROUP_SUCCESS, ADMIN_DELETE_USER_FAIL,
    ADMIN_DELETE_USER_SUCCESS, ADMIN_GET_ACTIVITIES_FAIL,
    ADMIN_GET_ACTIVITIES_SUCCESS, ADMIN_GET_AMOUNTS_FAIL,
    ADMIN_GET_AMOUNTS_SUCCESS,
    ADMIN_GET_BALANCE_FAIL,
    ADMIN_GET_BALANCE_SUCCESS, ADMIN_GET_CATEGORY_FAIL,
    ADMIN_GET_CATEGORY_SUCCESS, ADMIN_GET_DURATIONS_FAIL,
    ADMIN_GET_DURATIONS_SUCCESS,
    ADMIN_GET_FEEDBACK_FAIL,
    ADMIN_GET_FEEDBACK_SUCCESS,
    ADMIN_GET_GROUPS_FAIL,
    ADMIN_GET_GROUPS_SUCCESS, ADMIN_GET_PERIODS_FAIL,
    ADMIN_GET_PERIODS_SUCCESS, ADMIN_GET_USER_FAIL,
    ADMIN_GET_USER_SUCCESS,
    ADMIN_GET_WINNERS_FAIL,
    ADMIN_GET_WINNERS_SUCCESS,
    ADMIN_RESET_STATE_SUCCESS
} from "../../actions/type";

const initialState =
    {
        phone_number: false,
        account_number: false,
        balance: false,
        feedback:{},
        get_feedback: false,
        groups: {},
        get_groups: false,
        winners: {},
        get_winners: false,
        group_deleted: false,
        is_period_added: false,
        is_amount_added: false,
        is_duration_added: false,
        is_cat_added: false,
        activities: [],
        is_activities: false,
        periods: [],
        is_periods: false,
        durations: [],
        is_durations: false,
        amounts: [],
        is_amounts: false,
        category: [],
        is_category: false,
        user: [],
        is_user: false,
        is_user_deleted: false,
        admin_balance: false,

    };

export default function (state=initialState, action){
    switch (action.type) {
        case ADMIN_ADD_USER_SUCCESS:{
            return {
                ...state, phone_number: action.payload.phone_number, account_number: action.payload.account_number, balance: action.payload.balance
            }
        }
        case ADMIN_GET_FEEDBACK_SUCCESS:{
            return {
                ...state,feedback: action.payload, get_feedback:true
            }
        }
        case ADMIN_GET_GROUPS_SUCCESS:{
            return {
                ...state, groups: action.payload, get_groups: true
            }
        }
        case ADMIN_GET_WINNERS_SUCCESS:{
            return {
                ...state, winners: action.payload.data, get_winners: true
            }
        }

        case ADMIN_DELETE_GROUP_SUCCESS:{
            return {
                ...state, group_deleted: true
            }
        }
        case ADMIN_ADD_AMOUNT_SUCCESS:{
            return {
                ...state, is_amount_added: true
            }
        }
        case ADMIN_ADD_DURATION_SUCCESS:{
            return {
                ...state, is_duration_added: true
            }
        }

        case ADMIN_ADD_PERIOD_SUCCESS:{
            return {
                ...state, is_period_added: true
            }
        }
        case ADMIN_ADD_CATEGORY_SUCCESS:{
            return {
                ...state, is_cat_added: true
            }
        }
        case ADMIN_GET_ACTIVITIES_SUCCESS:{
            return {
                ...state, activities: action.payload, is_activities: true
            }
        }
        case ADMIN_GET_PERIODS_SUCCESS:{
            return {
                ...state, periods: action.payload, is_periods: true
            }
        }
        case ADMIN_GET_DURATIONS_SUCCESS:{
            return {
                ...state, durations: action.payload, is_durations: true
            }
        }
        case ADMIN_GET_AMOUNTS_SUCCESS:{
            return {
                ...state, amounts: action.payload, is_amounts: true
            }
        }
        case ADMIN_GET_CATEGORY_SUCCESS:{
            return {
                ...state, category: action.payload, is_category: true
            }
        }
        case ADMIN_GET_USER_SUCCESS:{
            return {
                ...state, user: action.payload, is_user: true
            }
        }
        case ADMIN_DELETE_USER_SUCCESS:{
            return {
                ...state, is_user_deleted: true
            }
        }
        case ADMIN_GET_BALANCE_SUCCESS:{
            return {
                ...state, admin_balance: action.payload.balance
            }
        }
        case ADMIN_RESET_STATE_SUCCESS:{
            return {
                ...state,
                phone_number: false,
        account_number: false,
        balance: false,
        feedback:{},
        get_feedback: false,
        groups: {},
        get_groups: false,
        winners: {},
        get_winners: false,
        group_deleted: false,
        is_period_added: false,
        is_amount_added: false,
        is_duration_added: false,
        is_cat_added: false,
        activities: [],
        is_activities: false,
        periods: [],
        is_periods: false,
        durations: [],
        is_durations: false,
        amounts: [],
        is_amounts: false,
        category: [],
        is_category: false,
        user: [],
        is_user: false,
        is_user_deleted: false,
        admin_balance: false,
            }
        }
        case ADMIN_GET_BALANCE_FAIL:
        case ADMIN_DELETE_USER_FAIL:
        case ADMIN_GET_USER_FAIL:
        case ADMIN_GET_CATEGORY_FAIL:
        case ADMIN_GET_AMOUNTS_FAIL:
        case ADMIN_GET_PERIODS_FAIL:
        case ADMIN_GET_DURATIONS_FAIL:
        case ADMIN_GET_ACTIVITIES_FAIL:
        case ADMIN_ADD_CATEGORY_FAIL:
        case ADMIN_ADD_AMOUNT_FAIL:
        case ADMIN_ADD_PERIOD_FAIL:
        case ADMIN_ADD_DURATION_FAIL:
        case ADMIN_DELETE_GROUP_FAIL:
        case ADMIN_GET_WINNERS_FAIL:
        case ADMIN_GET_GROUPS_FAIL:
        case ADMIN_ADD_USER_FAIL:
        case ADMIN_GET_FEEDBACK_FAIL:{
            return {
                ...state,
                phone_number: false,
        account_number: false,
        balance: false,
        feedback:{},
        get_feedback: false,
        groups: {},
        get_groups: false,
        winners: {},
        get_winners: false,
        group_deleted: false,
        is_period_added: false,
        is_amount_added: false,
        is_duration_added: false,
        is_cat_added: false,
        activities: [],
        is_activities: false,
        periods: [],
        is_periods: false,
        durations: [],
        is_durations: false,
        amounts: [],
        is_amounts: false,
        category: [],
        is_category: false,
        user: [],
        is_user: false,
        is_user_deleted: false,
        admin_balance: false,
            }
        }
        default: {
            return state
        }
    }
}