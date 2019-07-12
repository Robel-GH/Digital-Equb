import {ADD_ERROR} from "../actions/type";

const initialState={
    err:"",
    status:"",
};
export default function(state=initialState,action){
  switch (action.type) {
      case ADD_ERROR:{
          return{
              err:action.payload.err2,
              status:action.payload.status2,
          };
          break;
      }
  }
  return state;
}