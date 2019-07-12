import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getStripePubkey} from "../redux/actions/join/join";
import {Link, Redirect} from "react-router-dom";

class PaymentChoice extends Component {

     static propType = {
        getStripePubkey: PropTypes.func,
        pay: PropTypes.array,
        joins: PropTypes.array
    };

    componentDidMount() {
        const {getStripePubkey, joins} = this.props;
        if (joins.stripe_pub_key === false)
            getStripePubkey()
    }
    render() {
        return (
            <Fragment>

                 <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                 <Link className="card-link text-center" to="/join/first_payment"><span>Pay with your equb account</span></Link>
                <Link className="card-link text-center" to="/join/first_payment/online"><span>Pay with online payment system</span></Link>
                 </div>
                 </div>

            </Fragment>
        );
    }
}
const mapStateToProps=(state)=>({
    pay: state.pay,
    joins: state.joins
});
export default connect(mapStateToProps, {getStripePubkey})(PaymentChoice);