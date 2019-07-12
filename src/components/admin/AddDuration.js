import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminAddDurationAction} from "../redux/actions/admin/admin";
class AddDuration extends Component {
    state={
        duration:null
    };
    static propTypes = {
        admin: PropTypes.array,
        adminAddDurationAction: PropTypes.array
    };

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        const {admin, adminAddDurationAction} = this.props;
        if(admin.is_duration_added === false) {

            adminAddDurationAction(this.state.duration)
        }
    };
    render() {
        const {admin} = this.props;
        return (
            admin.is_duration_added === true ?
                <Fragment>
                    <strong>Duration successfully added!</strong>
                </Fragment>
                :
            <Fragment>
                <div className="col-md-12">
                 <div className="card card-body mt-5">
                    {/*<h2 className="text-center">Add Duration</h2>*/}
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Duration</label>
                            <input type="text" name="duration" value={this.state.duration} onChange={this.onChange}  className="form-control" required="true"/>
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
export default connect(mapStateToProps, {adminAddDurationAction}) (AddDuration);
