import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {registerAction,sendOtpAction,confirmUserAction, confirmLegalCredentialAction} from "../redux/actions/accounts/login";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

class Register extends Component {
    state ={
      firstName:'',
      lastName:'',
      phoneNumber:'',
      email:'',
      password:'',
      confirmPassword:'',
      otp:'',
      account_number: '',
    };
    static propTypes={
        registerAction:PropTypes.func.isRequired,
        sendOtpAction:PropTypes.func.isRequired,
        confirmUserAction:PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
        isConfirmed: PropTypes.bool,
        isOtpSent: PropTypes.bool,
        isLegalConfirmed:PropTypes.bool,
        confirmLegalCredentialAction: PropTypes.func.isRequired,
        phone:PropTypes.string,
    };

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        const {firstName,lastName,email,phoneNumber,password,confirmPassword,otp, account_number}=this.state;
        const {isConfirmed,isOtpSent,phone,confirmUserAction, confirmLegalCredentialAction}=this.props;
        if(isConfirmed) {
            if (password === confirmPassword) {

                this.props.registerAction(firstName, lastName, email, phoneNumber, password, account_number);
                this.setState({
                    firstName:null,
                    lastName:null,
                    email:null,
                    password:null,
                    confirmPassword:null,
                    otp:null,
                    account_number: null,
                })
            } else {
                console.log('Password mismatch')
            }
        }
        else if(isOtpSent){
            confirmUserAction(otp,phoneNumber);

        }
        else{
            // sendOtpAction(phoneNumber);
            confirmLegalCredentialAction(phoneNumber, account_number)
        }
    };

    componentDidUpdate(prevState) {
        const {isLegalConfirmed, isOtpSent, sendOtpAction, phone} = this.props;

        if(isLegalConfirmed && isOtpSent===false){
            sendOtpAction(this.state.phoneNumber)
        }
    }

    render() {
        const {firstName,lastName,phoneNumber,email,password,confirmPassword,otp, account_number}=this.state;
        const {isConfirmed,isAuthenticated,isOtpSent, isLegalConfirmed, phone}=this.props;

        if(isAuthenticated){
            return <Redirect to="/ዘ-EQUB/joined-equb"/>
        }

        if(isConfirmed) {
            return (

                <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h2 className="text-center">Register</h2>
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label>FirstName</label>
                                    <input type="text" name="firstName" value={firstName} onChange={this.onChange}
                                           className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>LastName</label>
                                    <input type="text" name="lastName" value={lastName} onChange={this.onChange}
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>PhoneNumber</label>
                                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.onChange}
                                           data-format="+2 (ddd) ddd-dddd" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>AccountNumber</label>
                                    <input type="number" name="account_number" value={account_number} onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" name="email" value={email} onChange={this.onChange}
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name="password" value={password} onChange={this.onChange}
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label>ConfirmPassword</label>
                                    <input type="password" name="confirmPassword" value={confirmPassword}
                                           onChange={this.onChange} className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-sm">Register</button>
                                </div>

                                <p>
                                    Already have an account?
                                    <Link to="/login">Login</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </Fragment>
            );
        }
        if(isLegalConfirmed && isOtpSent === false){
            return (
                <Fragment>

                </Fragment>
            )
        }
        else if(isOtpSent){
            return (
                <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h2 className="text-center">Insert received otp</h2>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label>Otp</label>
                                    <input type="text" name="otp" value={otp} onChange={this.onChange}
                                           className="form-control" required="true"/>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-sm">Send</button>
                                </div>

                                <p>
                                    Already have an account?
                                    <Link to="/login">Login</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </Fragment>
            )

        }
        else{
            return (
                <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h2 className="text-center">Register</h2>
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <label>PhoneNumber</label>
                                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={this.onChange}
                                           data-format="+2 (ddd) ddd-dddd" className="form-control" required="true"/>
                                </div>
                                <div className="form-group">
                                    <label>AccountNumber</label>
                                    <input type="number" name="account_number" value={account_number} onChange={this.onChange} className="form-control" required="true"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-sm">Send</button>
                                </div>

                                <p>
                                    Already have an account?
                                    <Link to="/login">Login</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </Fragment>
            )

        }
    }
}
const mapStateToProps=state=>({
    isAuthenticated:state.login.isAuthenticated,
    isConfirmed:state.login.isConfirmed,
    isOtpSent:state.login.isOtpSent,
    isLegalConfirmed: state.login.isLegalConfirmed,
    phoneNumber: state.login.phone
});
export default connect(mapStateToProps,{registerAction,sendOtpAction,confirmUserAction, confirmLegalCredentialAction})(Register);