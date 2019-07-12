import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {checkCheckBalanceAction} from "../redux/actions/status/status";
import PropTypes from "prop-types";

class StatusBalance extends Component {
    static propTypes = {
        admin: PropTypes.array,
        login: PropTypes.array,
        checkCheckBalanceAction: PropTypes.func,
    };
    componentDidMount() {
        const {login, status, checkCheckBalanceAction}= this.props;
        if(status.balance === false)
            checkCheckBalanceAction()
    }

    render() {
        const {status} = this.props;
        return (
            status.balance !==false ?
                <Fragment>
                    <h3><strong>{status.balance}</strong></h3>
                </Fragment>
                :
            <Fragment>

            </Fragment>
        );
    }
}

const mapStateToProps=state=>({
     status: state.status,
     login: state.login
 });
export default connect(mapStateToProps, {checkCheckBalanceAction})(StatusBalance);
