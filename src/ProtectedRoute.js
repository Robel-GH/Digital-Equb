import {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import User from "./AllRoute";
import React from "react";

class ProtectedRoute extends Component {
    static  propTypes = {
            login : PropTypes.array
        };
  render() {
    const { component: Component, ...props } = this.props

    return (
      <Route
        {...props}
        render={props => (
          this.props.login.isAuthenticated && this.props.login.user.is_staff === false ?
            <Component {...props} /> :
            <Redirect to='/login' />
        )}
      />
    )
  }
}

const mapStateToProps=state=>({
   login:state.login
});

export default connect(mapStateToProps)(ProtectedRoute);