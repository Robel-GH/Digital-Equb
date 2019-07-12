import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {Route, Redirect} from "react-router-dom";



const PrivateRoute=({component:Component,login,...rest})=>(


    <Route
        {...rest}
        render={props=>{
            if(login.isLoading)
                return <h1>Loading</h1>;
            else if(!login.isAuthenticated || !login.isConfirmed)
                return <Redirect to="/login"/>;
            else
            return <Component {...props}/>;

        }}
    />
);

const mapStateToProps=state=>({
    login:state.login
});


export default connect(mapStateToProps)(PrivateRoute);