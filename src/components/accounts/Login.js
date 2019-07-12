import React, {Component, Fragment} from 'react';
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {userLogin} from "../redux/actions/accounts/login"


class Login extends Component {
    state ={
      phoneNumber:'',
      password:'',
    };



    static propType={
        login:PropTypes.array.isRequired,
        userLogin:PropTypes.func.isRequired,
    };

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        const {phoneNumber,password}=this.state;
        e.preventDefault();
        this.props.userLogin(phoneNumber,password)
    };

    render() {
        if(this.props.login.isAuthenticated) {
            if (this.props.login.user.is_staff === false) {
                return <Redirect to="/ዘ-EQUB/joined-equb"/>

            }
            else {
                return <Redirect to="/ዘ-EQUB/admin/dashboard"/>
            }
        }
        const {phoneNumber,password}=this.state;
        return (
           <Fragment>
               <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>PhoneNumber</label>
                            <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.onChange} data-format="+2 (ddd) ddd-dddd" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" value={password}  onChange={this.onChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-sm">Login</button>
                        </div>

                        <p>
                            Don't have an account?
                            <Link to="/signup">Signup</Link>
                        </p>

                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
}
const mapStateToProps=state=>({
   login:state.login
});

export default connect(mapStateToProps,{userLogin})(Login);