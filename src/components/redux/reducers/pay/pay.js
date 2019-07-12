import {
    GET_SELECTED_AMOUNT_FAILL,
    GET_SELECTED_AMOUNT_SUCCESS,
    MANUAL_PAY_FAIL,
    MANUAL_PAY_SUCCESS,
    ONLINE_CHARGE_FAIL,
    ONLINE_CHARGE_SUCCESS,
    ONLINE_PAY_FAIL,
    ONLINE_PAY_SUCCESS,
    PAY_STATE_RESET_ACTION,
    STATUS_SET_GROUP_CAT_ID_FAIL,
    STATUS_SET_GROUP_CAT_ID_SUCCESS
} from "../../actions/type";

const initialState = {
    isPayed: false,
    selected_cat_id: false,
    selected_group_id: false,
    selected_amount:false,
    stripe_pub_key: false,
    is_charged: false
};

export default function (state=initialState, action) {

    switch (action.type) {
        case MANUAL_PAY_SUCCESS:{
            return {
                ...state,
                isPayed: true
            }
        }
        case GET_SELECTED_AMOUNT_SUCCESS:{
            return {
                ...state, selected_amount: action.payload.amount
            }
        }
        case GET_SELECTED_AMOUNT_FAILL:
        case ONLINE_CHARGE_FAIL:
        case MANUAL_PAY_FAIL:
        case ONLINE_PAY_FAIL:{
            return{
                ...state
            }
        }
        case ONLINE_PAY_SUCCESS:{
            return {
                ...state, stripe_pub_key: action.payload.pub_key
            }
        }
        case ONLINE_CHARGE_SUCCESS:{
            return {
                ...state, is_charged: action.payload.status
            }
        }
        case STATUS_SET_GROUP_CAT_ID_SUCCESS:{
            return {
                ...state, selected_group_id:action.payload.g_id, selected_cat_id: action.payload.cat_id
            }
        }
        case PAY_STATE_RESET_ACTION:{
            return {
                ...state, isPayed: false,
    selected_cat_id: false,
    selected_group_id: false,
    selected_amount:false,
    stripe_pub_key: false,
    is_charged: false
            }
        }

        default:{
            return {
                ...state
            }
        }
    }
}