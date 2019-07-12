import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminAddUserAction} from "../redux/actions/admin/admin";

class AddUser extends Component {
    state = {
        "phone_number": "",
        "balance": ""
    };
     static propTypes ={
      admin: PropTypes.array.isRequired,
      adminAddUserAction: PropTypes.func.isRequired,
    };
    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        this.props.adminAddUserAction(this.state.phone_number, this.state.balance)
    };
    render() {
        return (
            this.props.admin.account_number !== false ?
                <Fragment>
                    <strong>User account number is {this.props.admin.account_number}</strong>
                </Fragment>
                :
            <Fragment>
                <div className="col-md-12">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Register User</h2>
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.onChange} data-format="+2 (ddd) ddd-dddd" className="form-control" required="true"/>
                        </div>
                        <div className="form-group">
                            <label>Balance</label>
                            <input type="number" name="balance" value={this.state.balance} onChange={this.onChange}  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-sm">Register</button>
                        </div>
                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state)=>({
    admin: state.admin
});
export default connect(mapStateToProps, {adminAddUserAction}) (AddUser);