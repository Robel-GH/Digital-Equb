import {GET_LEADS,DELETE_LEADS,ADD_LEADS} from "../actions/type";

const initialState={
  users:[]
};

export default function (state=initialState,action){
    switch (action.type) {
        case GET_LEADS:{
            return{
                ...state,
                users:action.payload
            };
            break;
        }
        /*case "DELETE_LEADS":{
            return{
                ...state,
                leads:state.leads.filter(leads=>leads.id!==action.payload)
            };
            break;
        }*/
        case DELETE_LEADS:{

            return{
                ...state,
                users:state.users.filter(item=>item.id!==action.payload)
            };
            break;
        }
        case ADD_LEADS:{
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        }
        default:{
            return state;
        }
    }
}