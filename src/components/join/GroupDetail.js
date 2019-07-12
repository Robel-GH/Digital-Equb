import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getGroupDataAction, setGroupNameAction, getGroupMembersAction, getWinnersAction} from "../redux/actions/join/join";
import {Link, Redirect} from "react-router-dom";
import GroupExisting from "./GroupExisting";

class GroupDetail extends Component {
    static propTypes ={
      joins: PropTypes.array.isRequired,
      getGroupDataAction: PropTypes.func.isRequired,
      setGroupNameAction: PropTypes.func.isRequired,
      getGroupMembersAction: PropTypes.func.isRequired,
      getWinnersAction: PropTypes.func.isRequired,
    };

    state={
        g_name:""
    };

    componentDidMount() {
        if(this.props.joins.is_members_loaded ===false && this.props.joins.group_data_loaded === true){
            this.props.getGroupMembersAction()
        }
    }
    // componentDidUpdate(prevState) {
    //     if(this.props.joins.winners !== prevState.joins.winners && this.props.joins.group_data_loaded === true){
    //        this.props.getWinnersAction()
    //     }
    // }
    //
    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        this.props.setGroupNameAction(this.state.g_name)
    };

    render() {
        // check weather the user is the first one on the group
        if(this.props.joins.is_new_group===true && this.props.joins.groups_name===null) {
            return (
                <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h2 className="text-center">Create your group name</h2>
                            <form onSubmit={this.onSubmit}>


                                <div className="form-group">
                                    <label>Group Name</label>
                                    <input type="text" name="g_name" value={this.state.g_name}
                                           onChange={this.onChange}
                                           className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-info btn-sm">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fragment>
            );
        }

        if((this.props.joins.is_new_group===false && this.props.joins.group_data_loaded===true) || this.props.joins.groups_name !== null){
            return (
                <Fragment><GroupExisting/></Fragment>
            )
        }

        return (
            <Fragment>
            </Fragment>

        );
    }
}

const mapStateToProps=state=>({
     joins: state.joins
 });

export default connect(mapStateToProps, {getGroupDataAction, setGroupNameAction, getGroupMembersAction, getWinnersAction}) (GroupDetail);