import {ALERT_CREATE_USER,ALERT_GET_USER} from "../actions/type";
const initialState={};
export default function (state=initialState,action) {
    switch (action.type) {
        case ALERT_CREATE_USER: {
            return (state = action.payload)
        }
            break;

        case ALERT_GET_USER: {
            return (state = action.payload)
             break;
        }
        default: {
            return state;
        }

    }

}
