import {
    SALE_BUY_STATE_RESET_SUCCESS, STATUS_CHECK_BALANCE_SUCCESS,
    STATUS_GET_GROUP_MEMBERS_FAIL,
    STATUS_GET_GROUP_MEMBERS_SUCCESS, STATUS_GET_SALE_LOT_FAIL, STATUS_GET_SALE_LOT_SUCCESS,
    STATUS_GET_WINNERS_FAIL,
    STATUS_GET_WINNERS_SUCCESS, STATUS_GIVE_FEEDBACK_FAIL, STATUS_GIVE_FEEDBACK_SUCCESS,
    STATUS_RESET_STATE_SUCCESS,
    STATUS_SET_GROUP_CAT_ID_FAIL,
    STATUS_SET_GROUP_CAT_ID_SUCCESS
} from "../../actions/type";


const initialState ={
    group_members:[],
    is_members_loaded:false,
    winners:[],
    is_winners_loaded: false,
    status_error: [],
    sale_lots: [],
    is_sale_lots: false,
    is_feedback_gave: false,
    balance: false
};
export default function (state=initialState, action) {
    switch(action.type) {

        case STATUS_GET_GROUP_MEMBERS_SUCCESS: {
            return {
                ...state, group_members: action.payload.data, is_members_loaded: true
            }
        }

        case STATUS_GET_WINNERS_SUCCESS: {
            return {
                ...state, winners: action.payload.data, is_winners_loaded: true
            }
        }

        case STATUS_RESET_STATE_SUCCESS: {
            return {
                ...state,
                group_members:[],
    is_members_loaded:false,
    winners:[],
    is_winners_loaded: false,
    status_error: [],
                sale_lots: [],
    is_sale_lots: false,
    is_feedback_gave: false,
            }
        }
        case STATUS_GET_SALE_LOT_SUCCESS: {
            return {
                ...state, sale_lots: action.payload.data, is_sale_lots: true
            }
        }

        // case STATUS_SET_GROUP_CAT_ID_SUCCESS:{
        //     return {
        //         ...state, selected_group_id:action.payload.g_id, selected_cat_id: action.payload.cat_id
        //     }
        // }
        //
        // case STATUS_SET_GROUP_CAT_ID_FAIL:
        case STATUS_GET_GROUP_MEMBERS_FAIL:
        case STATUS_GIVE_FEEDBACK_FAIL:
        case STATUS_GET_SALE_LOT_FAIL:
        case STATUS_GET_WINNERS_FAIL: {
            return {
                ...state,
                group_members:[],
    is_members_loaded:false,
    winners:[],
    is_winners_loaded: false,
    status_error: [],
    sale_lots: [],
    is_sale_lots: false,
    is_feedback_gave: false,
            }
        }
        case STATUS_GIVE_FEEDBACK_SUCCESS:{
            return {
                ...state, is_feedback_gave: true
            }
        }
        case STATUS_CHECK_BALANCE_SUCCESS:{
            return {
                ...state, balance: action.payload.balance
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
