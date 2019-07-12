import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminAddAmountAction} from "../redux/actions/admin/admin";
class AddAmount extends Component {
    state={
        amount:null
    };
    static propTypes = {
        admin: PropTypes.array,
        adminAddAmountAction: PropTypes.array
    };

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        const {admin, adminAddAmountAction} = this.props;
        if(admin.is_amount_added === false) {

            adminAddAmountAction(this.state.amount);
        }
    };
    render() {
        const {admin} = this.props;
        return (
            admin.is_amount_added === true ?
                <Fragment>
                    <strong>Amount successfully added!</strong>
                </Fragment>
                :
            <Fragment>
                <div className="col-md-12">
                 <div className="card card-body mt-5">
                    {/*<h2 className="text-center">Add Amount</h2>*/}
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Amount</label>
                            <input type="number" name="amount" value={this.state.amount} onChange={this.onChange}  className="form-control" required="true"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-sm">Add</button>
                        </div>
                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
    }

const mapStateToProps=(state)=>({
    admin: state.admin
});
export default connect(mapStateToProps, {adminAddAmountAction}) (AddAmount);
