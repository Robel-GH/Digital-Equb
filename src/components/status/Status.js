import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {statusGetWinnersAction} from "../redux/actions/status/status";
import StatusDetails from "./StatusDetails";
import PropTypes from "prop-types";
import {getCurrentDateTime} from "../redux/actions/accounts/login";
import {joinStateResetAction} from "../redux/actions/join/join";
import {payStateResetAction} from "../redux/actions/pay/pay";
import {statusStateResetAction} from "../redux/actions/status/status";
import {saleBuyStateResetAction} from "../redux/actions/sale_buy/sale_buy";
import {updateUserAction} from "../redux/actions/accounts/login";
import {adminResetStateAction} from "../redux/actions/admin/admin";
import StatusDetail from "./StatusDetail";
class Status extends Component {

    static propType={
        status:PropTypes.array,
        statusGetWinnersAction:PropTypes.func,
        login:PropTypes.array.isRequired,
        getCurrentDateTime: PropTypes.func,
        joinStateResetAction: PropTypes.func,
        statusStateResetAction: PropTypes.func,
        payStateResetAction: PropTypes.func,
        saleBuyStateResetAction: PropTypes.func,
        updateUserAction: PropTypes.func,
        adminResetStateAction: PropTypes.func,
    };

    componentDidMount() {
        // const {is_members_loaded} = this.props.status;
        // const {statusGetMembersAction} = this.props;
        //
        // if(is_members_loaded === false){
        //     statusGetMembersAction();
        // }
        const {updateUserAction, payStateResetAction, joinStateResetAction, statusStateResetAction, saleBuyStateResetAction, adminResetStateAction} = this.props;
        payStateResetAction();
        joinStateResetAction();
        statusStateResetAction();
        saleBuyStateResetAction();
        adminResetStateAction();

        updateUserAction()

        const {status, statusGetWinnersAction, login} = this.props;
        if(login.user.user_groups.season !== 0 && status.is_winners_loaded === false) {
            statusGetWinnersAction()
        }
    }

    render() {
        const {is_winners_loaded} = this.props.status;
        // const activated_at_array = this.props.login.user.user_groups[9].activation_time[0].activated_at;
        // const activated_at_array2 = this.props.login.user.user_groups.map(activate=>activate.activation_time);
        // // const activated_at_array3 = activated_at_array2.map(activate=>activate.activated_at);
        const current = this.props.login.current_date;
        const year = current.slice(0, 4);
        const month = current.slice(5, 7);
        const day = current.slice(8 ,10);
        const total_current_day = parseInt(year)*365 + parseInt(month)*30 + parseInt(day);
        console.log(total_current_day);
        // console.log(this.props.login.user.user_groups[9].activation_time.activated_at);
        return (
            is_winners_loaded === true ?
                <Fragment><StatusDetail/></Fragment>:
                <Fragment>

                </Fragment>
        );
    }
}

const mapStateToProps=(state)=>({
    status:state.status,
    login:state.login,
});

export default connect(mapStateToProps, {statusGetWinnersAction,updateUserAction, getCurrentDateTime, payStateResetAction, joinStateResetAction, statusStateResetAction, saleBuyStateResetAction, adminResetStateAction})(Status);