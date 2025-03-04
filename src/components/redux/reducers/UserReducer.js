const initiateState={
    user:[],
    fetching:false,
    fetched:false,
    error:null,
};

export default function reducer(state=initiateState,action){
  switch (action.type) {
      case "FETCH_USER":{
          return{...state,fetching: true}
          break;
      }
      case "FETCH_USER_REJECTED":{
          return{...state,fetching:false,error: action.payload}
          break;
    }
    case "FETCH_USER_FULFILLED":{
          return{...state,fetching:false,fetched:true,user:action.payload}
          break;
    }
    case "ADD_USER_NAME":{
          return{...state,user:[...state.user,action.payload]}
          break;
    }
  }
  return state;
};