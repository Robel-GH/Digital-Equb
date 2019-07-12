import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getSelectedAmount} from "../redux/actions/pay/pay";
import {Link} from "react-router-dom";

class PaymentDashboard extends Component {
    static propType = {
        getSelectedAmount: PropTypes.func,
        pay: PropTypes.array
    };
    componentDidMount() {
        const {getSelectedAmount, pay} = this.props;
        if(pay.selected_amount === false && pay.selected_cat_id !== false)
            getSelectedAmount(pay.selected_cat_id)
    }

    render() {
        return (
            <Fragment>
                <br/>
                <br/>
                <Link to="/ዘ-EQUB/next-season-payment/manual"><strong className="btn btn-outline-primary">Pay with your Equb account</strong></Link>
                <br/>
                <br/>
                <Link to="/ዘ-EQUB/next-season-payment/online"><strong className="btn btn-outline-primary">Pay with online payment system</strong></Link>
            </Fragment>
        );
    }
}

const mapStateToProps=(state)=>({
    pay: state.pay
});
export default connect(mapStateToProps, {getSelectedAmount})(PaymentDashboard);
