import {ALERT_CREATE_USER,ALERT_GET_USER} from "./type";

export const createUserAlert=msg=>dispatch=>{
  dispatch({
      type:ALERT_CREATE_USER,
      payload:msg,
  })
};
