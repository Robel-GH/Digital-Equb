import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {adminCheckBalanceAction} from "../redux/actions/admin/admin";
import PropTypes from "prop-types";

class Balance extends Component {
    static propTypes = {
        admin: PropTypes.array,
        login: PropTypes.array,
        adminCheckBalanceAction: PropTypes.func,
    };
    componentDidMount() {
        const {login, admin, adminCheckBalanceAction}= this.props;
        if(admin.admin_balance === false)
            adminCheckBalanceAction()
    }

    render() {
        const {admin} = this.props;
        return (
            admin.admin_balance !==false ?
                <Fragment>
                    <h3><strong>{admin.admin_balance}</strong></h3>
                </Fragment>
                :
            <Fragment>

            </Fragment>
        );
    }
}

const mapStateToProps=state=>({
     admin: state.admin,
     login: state.login
 });
export default connect(mapStateToProps, {adminCheckBalanceAction})(Balance);
