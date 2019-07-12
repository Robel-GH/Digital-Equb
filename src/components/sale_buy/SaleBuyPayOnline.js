import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {saleBuyGetStripePubkey, saleBuyStripeCharge} from "../redux/actions/sale_buy/sale_buy";
import StripeCheckout from 'react-stripe-checkout'

class SaleBuyPayOnline extends Component {
    static propType = {
        saleBuyGetStripePubkey: PropTypes.func,
        sale_buy: PropTypes.array,
        saleBuyStripeCharge: PropTypes.func
    };
    componentDidMount() {
        const {sale_buy, saleBuyGetStripePubkey} = this.props;
        if (sale_buy.stripe_pub_key === false)
            saleBuyGetStripePubkey()
    }
    handleToken=(token)=>{
         const {saleBuyStripeCharge} = this.props;
            saleBuyStripeCharge(token.id, token.email);
    };
    render() {
        const {sale_buy} = this.props;

        if (sale_buy.stripe_pub_key !== false && sale_buy.is_charged === false) {
            return (
                <Fragment>
                    <StripeCheckout token={this.handleToken}
                                    stripeKey={sale_buy.stripe_pub_key}
                                    amount={sale_buy.pre_payment * 100}
                    />
                </Fragment>

            );
        }
        if (sale_buy.is_charged === true) {
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
    sale_buy: state.sale_buy
});
export default connect(mapStateToProps, {saleBuyGetStripePubkey, saleBuyStripeCharge})(SaleBuyPayOnline);