import {
    SALE_BUY_Buy_PayManual_SUCCESS,
    SALE_BUY_GET_PREPAYMENT_SUCCESS, SALE_BUY_ONLINE_CHARGE_SUCCESS, SALE_BUY_ONLINE_PAY_SUCCESS,
    SALE_BUY_SELL_SUCCESS,
    SALE_BUY_SET_ID_SUCCESS, SALE_BUY_STATE_RESET_SUCCESS,
    SALE_SET_GROUP_CAT_ID_SUCCESS
} from "../../actions/type";

const initialState = {
    sale_group_id : false,
    sale_cat_id: false,
    sale_season: false,
    is_sold: false,
    sale_buy_id: false,
    pre_payment: false,
    is_manual_paid: false,
    stripe_pub_key: false,
    is_charged: false,
};

export default function (state=initialState, action) {
    switch (action.type) {
        case SALE_SET_GROUP_CAT_ID_SUCCESS:
        {
            return {
                ...state, sale_group_id: action.payload.g_id, sale_cat_id: action.payload.cat_id, sale_season: action.payload.season
            }

        }
        case SALE_BUY_SELL_SUCCESS:
        {
            return {
                ...state, is_sold: true
            }
        }
        case SALE_BUY_SET_ID_SUCCESS: {
            return {
                ...state, sale_buy_id: action.payload
            }
        }
        case SALE_BUY_GET_PREPAYMENT_SUCCESS: {
            return {
                ...state, pre_payment: action.payload.data
            }
        }
        case SALE_BUY_Buy_PayManual_SUCCESS: {
            return {
                ...state, is_manual_paid: true
            }
        }
        case SALE_BUY_ONLINE_PAY_SUCCESS:{
            return {
                ...state, stripe_pub_key: action.payload.pub_key
            }
        }
        case SALE_BUY_ONLINE_CHARGE_SUCCESS:{
            return {
                ...state, is_charged: true
            }
        }
        case SALE_BUY_STATE_RESET_SUCCESS: {
            return {
                ...state, sale_group_id : false,
    sale_cat_id: false,
    sale_season: false,
    is_sold: false,
    sale_buy_id: false,
    pre_payment: false,
    is_manual_paid: false,
    stripe_pub_key: false,
    is_charged: false,
            }
        }
        default:{
                return {
                    ...state
                }
        }
    }
}