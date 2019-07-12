import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCurrentDateTime} from "../redux/actions/accounts/login";
import {joinStateResetAction} from "../redux/actions/join/join";
import {payStateResetAction} from "../redux/actions/pay/pay";
import {statusStateResetAction} from "../redux/actions/status/status";
import {saleBuyStateResetAction} from "../redux/actions/sale_buy/sale_buy";
import {updateUserAction} from "../redux/actions/accounts/login";


class Dashbord extends Component {
    state={
        now: new Date()
    };

    static propType={
        login:PropTypes.array.isRequired,
        getCurrentDateTime: PropTypes.func,
        joinStateResetAction: PropTypes.func,
        statusStateResetAction: PropTypes.func,
        payStateResetAction: PropTypes.func,
        saleBuyStateResetAction: PropTypes.func,
        updateUserAction: PropTypes.func,
    };
    componentDidMount() {
        const {updateUserAction, payStateResetAction, joinStateResetAction, statusStateResetAction, saleBuyStateResetAction} = this.props;
        payStateResetAction();
        joinStateResetAction();
        statusStateResetAction();
        saleBuyStateResetAction();

        if(this.props.login.current_date === false)
            this.props.getCurrentDateTime()
        else
            updateUserAction()
    }

    render() {
        // const str = this.props.login.user.user_groups[9].activation_time[0].activated_at;
        // const year = str.slice(0,4);
        // console.log((parseInt(year)+1)%10);

        return (
            <Fragment>
                <h1 className="text-success">You are very welcome to this page!</h1>

                <Link className="nav-link" to="/join">
                                    Join
                                </Link>
                <Link className="nav-link" to="/status">
                                    Status
                                </Link>
                <Link to="/admin">Admin</Link><br/>
                <Link to="/sale_buy/buy">Buy Equb</Link>
                {/*{reactStringReplace(content, /(\d+)/g, (match, i) => (*/}
          {/*<span key={i} style={{ color: 'red' }}>{match}</span>*/}
        {/*))}*/}
                {/*<li className="Menubar-date">{hello}</li>*/}
            </Fragment>
        );
    }
}
const mapStateToProps=state=>({
   login:state.login
});

export default connect(mapStateToProps, {updateUserAction, getCurrentDateTime, payStateResetAction, joinStateResetAction, statusStateResetAction, saleBuyStateResetAction})(Dashbord);