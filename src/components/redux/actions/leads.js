import axios from "axios";
import {GET_LEADS,DELETE_LEADS,ADD_LEADS,ADD_ERROR,ALERT_GET_USER} from "../actions/type";
import {createUserAlert,getUserAlert} from "./alertMessages";

export const getLeads=()=>dispatch=>{

    axios.get("http://127.0.0.1:8000/api/profile/")
        .then(response=>{
        dispatch({type:GET_LEADS,payload:response.data})
        })
        .catch(err=>{
            const get_error={
                err_msg:err.response.data,
                status:err.response.status,
            };
            dispatch({
                type:ALERT_GET_USER,
                payload:get_error
            })
            }
        )
};

export const deleteLeads=(id)=>dispatch=>{
    axios.delete(`http://127.0.0.1:8000/api/profile/${id}/`)
        .then(response=>{
            dispatch({
                type:DELETE_LEADS,
                payload:id
            })
        })
        .catch(err=>{
            console.log(err)
        })
};
export const addLeads=(lead)=>dispatch=>{

   axios.post("http://127.0.0.1:8000/api/profile/",lead)
       .then(response=>{
           dispatch(createUserAlert({createMessage:"user successfully created!"}));
           dispatch({
               type:ADD_LEADS,
               payload:response.data
           })
       })
       .catch(err=>{
           const error_data={
               err2:err.response.data,
               status2:err.response.status,
           };
           dispatch({
               type:ADD_ERROR,
               payload:error_data,
           })
       })
};