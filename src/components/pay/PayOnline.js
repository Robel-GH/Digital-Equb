import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getStripePubkey, stripeCharge} from "../redux/actions/pay/pay";
import StripeCheckout from 'react-stripe-checkout'

class PayOnline extends Component {
    state = {
        "amount": 300
    };
    static propType = {
        getStripePubkey: PropTypes.func,
        stripeCharge: PropTypes.func,
        pay: PropTypes.array
    };

    componentDidMount() {
        const {pay, getStripePubkey} = this.props;
        if (pay.stripe_pub_key === false)
            getStripePubkey()
    }

    handleToken=(token)=>{
         const {stripeCharge} = this.props;
            stripeCharge(token.id, token.email);
    };

    render() {
        const {pay} = this.props;

        // function handleToken(token) {
        //     const {stripeCharge} = this.props;
        //     stripeCharge(token.id, token.email, 300);
        //
        // }

        if (pay.stripe_pub_key !== false && pay.is_charged === false) {
            return (
                <Fragment>
                    <StripeCheckout token={this.handleToken}
                                    stripeKey={pay.stripe_pub_key}
                                    amount={pay.selected_amount * 100}
                    />
                </Fragment>

            );
        }
        if (pay.is_charged === true) {
            return (
                <Fragment>
                    <strong>Successfully paid!</strong>
                </Fragment>

            );
        }
        return (
            <Fragment>

            </Fragment>

        );
    }
}
const mapStateToProps=(state)=>({
    pay: state.pay
});
export default connect(mapStateToProps, {getStripePubkey, stripeCharge})(PayOnline);