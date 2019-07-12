export const fetchUser=()=>{
    return{
        type:"FETCH_USER_FULFILLED",
        payload:{
            name:"will",
            age:54
        }
    }
}
export function setUserName(name){
    return{
        type:"ADD_USER_NAME",
        payload: name,
    }
}