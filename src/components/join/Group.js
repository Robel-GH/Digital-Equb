import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getGroupDataAction} from "../redux/actions/join/join";
import {Link, Redirect} from "react-router-dom";
import GroupDetail from "./GroupDetail";


class Group extends Component {
    static propTypes ={
      joins: PropTypes.array.isRequired,
      getGroupDataAction: PropTypes.func.isRequired,
    };

    componentDidMount() {
        if(this.props.joins.groups_name === null){
            this.props.getGroupDataAction()
        }
    }

    render() {
        return (
            this.props.joins.group_data_loaded === true ?
                <Fragment>
                    <GroupDetail/>
                </Fragment>
                :
                <Fragment></Fragment>
        )
    }
}
const mapStateToProps=state=>({
     joins: state.joins
 });
export default connect(mapStateToProps, {getGroupDataAction})(Group);