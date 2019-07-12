import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addLeads} from "../redux/actions/leads";


/*import { createStore, applyMiddleware } from 'redux'
import axios from "axios";
import {logger} from "redux-logger";
import thunk from 'redux-thunk';
import promise from "redux-promise-middleware"


const userReducer=(state={},action)=>{
    switch (action.type) {
        case "CHANGE_NAME": {
            state={...state,name:action.payload}
            break;
        }
        case "CHANGE_AGE": {
            state={...state,age:action.payload}
            break;
        }

    }
    return state;
};
const tweetReducer=(state=[],action)=> {
    return state
};
const reducer=combineReducers({
    user:  userReducer,
    tweet: tweetReducer
});



const store=createStore(reducer);




store.subscribe(()=>{
    console.log("state has been modified",store.getState())
})


store.dispatch({type:"CHANGE_NAME",payload:"ANGESOM"})
store.dispatch({type:"CHANGE_AGE",payload:35})
store.dispatch({type:"CHANGE_AGE",payload:50})

const initialState={
    fetching:false,
    fetched:false,
    user:[],
    error:""
};
const reducer=(state=initialState,action)=>{
  switch (action.type) {
      case "START_FETCH_USERS": {
          return {...state, fetching: true}
          break;
      }
      case "USER_FETCHED": {
          return {...state, fetched: true, fetching: false, user: action.payload}
          break;

      }
      case "FETCH_USERS_ERROR":{
          return {...state,error: action.payload}
          break;

    }
  }
};
*/



class Form extends Component {
    state={
        userName:"",
        email:"",
        phoneNo:"",
    };

    static propTypes={
      addLeads:PropTypes.func.isRequired,
    };
    onChange=e=> {
    this.setState({ [e.target.name]: e.target.value });
  };
    onSubmit=(e)=> {
        e.preventDefault();
        const {userName,email,phoneNo}=this.state;
        const lead={"userName":userName,"email":email,"phoneNo":phoneNo};
       /* const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch("http://127.0.0.1:8000/api/profile/", conf).then(response => console.log(response.formData()));*/
        this.props.addLeads(lead);
    };
    render() {
        const {userName,email,phoneNo}=this.state;
        return (
            <Fragment>
                <div className="card card-body mt-4 mb-4">
                    <h3>Add Members</h3>
                    <form onSubmit={this.onSubmit}>

                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="userName" value={userName} onChange={this.onChange} className="form-control"/>
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" name="email" value={email} onChange={this.onChange} className="form-control"/>
                        </div>
                         <div className="form-group">
                            <label>Phone_no</label>
                            <input type="text" name="phoneNo" value={phoneNo} data-format="+2 (ddd) ddd-dddd" onChange={this.onChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default connect(null,{addLeads})(Form);