import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminAddPeriodAction} from "../redux/actions/admin/admin";

class AddPeriod extends Component {

    state={
        period:null
    };
    static propTypes = {
        admin: PropTypes.array,
        adminAddPeriodAction: PropTypes.array
    };
    // componentDidMount() {
    //     const {admin, adminAddPeriodAction} = this.props;
    //     if(admin.period === false)
    //         adminAddPeriodAction()
    // }
    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        const {admin, adminAddPeriodAction} = this.props;
        if(admin.is_period_added === false) {

            adminAddPeriodAction(this.state.period)
        }
    };
    render() {
        const {admin} = this.props;
        return (
            admin.is_period_added === true ?
                <Fragment>
                    <strong>Period successfully added!</strong>
                </Fragment>
                :
            <Fragment>
                <div className="col-md-12">
                 <div className="card card-body mt-5">
                    {/*<h2 className="text-center">Add Period</h2>*/}
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Period</label>
                            <input type="text" name="period" value={this.state.period} onChange={this.onChange}  className="form-control" required="true"/>
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
export default connect(mapStateToProps, {adminAddPeriodAction}) (AddPeriod);