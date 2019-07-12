import React, {Component} from 'react';
import { withAlert } from 'react-alert';
import {connect} from "react-redux";
import PropsType from "prop-types";
import {joinStateResetAction, loadPeriodsDataAction, loadMonthDurationsDataAction, loadAmountsDataAction} from "../redux/actions/join/join";

class Alerts extends Component {

    static propsType={
        // err_msg: PropsType.array.isRequired,
        // createMsg: PropsType.array.isRequired,
        login: PropsType.array,
        joins: PropsType.array,
        admin: PropsType.array,
        joinStateResetAction: PropsType.array,
        loadPeriodsDataAction: PropsType.array,
        loadMonthDurationsDataAction: PropsType.array,
        loadAmountsDataAction: PropsType.array,
    };
    componentDidMount() {
        this.props.alert.show('welcome to z-equb!')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {login, alert, joins, admin} = this.props;
        if (login.accounts_error !== prevProps.login.accounts_error) {
            if (login.accounts_error.phone_number) {
                alert.error(`Phone number:${login.accounts_error.phone_number.join()}`)
            }
            if (login.accounts_error.password) {
                alert.error(`Password:${login.accounts_error.password.join()}`)
            }
            if (login.accounts_error.detail) {
                alert.error(`${login.accounts_error.detail.join()}`)
            }
        }
        if (login.legal_confirm_error !== prevProps.login.legal_confirm_error) {
            if (login.legal_confirm_error.err)
                alert.error(`${login.legal_confirm_error.err}`)
        }
        if (login.otp_received_detail !== prevProps.login.otp_received_detail) {
            if (login.otp_received_detail.err) {
                if (login.login.legal_confirm_error.err !== prevProps.login.legal_confirm_error.err)
                    alert.error(`${login.legal_confirm_error.err}`);
            }
            if (login.otp_received_detail.detail) {
                if (login.otp_received_detail.detail !== prevProps.login.otp_received_detail.detail)
                    alert.success(`${login.otp_received_detail.detail}`)
            }
        }
        if (joins.load_cat_err.err !== prevProps.joins.load_cat_err.err) {
            alert.error(`${joins.load_cat_err.err}`);
            this.props.joinStateResetAction();
            this.props.loadPeriodsDataAction();
            this.props.loadMonthDurationsDataAction();
            this.props.loadAmountsDataAction();
        }
        if (admin.group_deleted !== prevProps.admin.group_deleted) {
            alert.success(`group deleted successfully!`)
        }
        // if (joins.first_payment_err.data!== prevProps.joins.first_payment_err.data) {
        //     if (joins.first_payment_err.data.length === 1)
        //     alert.error(`${joins.first_payment_err.data}`)
        // }
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}
const mapStateToProps=state=>({
    // err_msg:state.errors.err,
    // status_msg:state.errors.status,
    // createMsg:state.alertMessage,
    login: state.login,
    joins: state.joins,
    admin: state.admin,
});

export default connect(mapStateToProps, {joinStateResetAction, loadPeriodsDataAction, loadMonthDurationsDataAction, loadAmountsDataAction})(withAlert()(Alerts));