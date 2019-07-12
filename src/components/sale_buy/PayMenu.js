import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {salebuyBuyGetPrePayment} from "../redux/actions/sale_buy/sale_buy";

class PayMenu extends Component {
    static propTypes = {
        sale_buy: PropTypes.array,
        salebuyBuyGetPrePayment: PropTypes.func
    };

    componentDidMount() {
        const {sale_buy, salebuyBuyGetPrePayment} = this.props;
        if(sale_buy.pre_payment === false){
            salebuyBuyGetPrePayment()
        }
    }

    render() {
        const {sale_buy} = this.props;
        return (
            sale_buy.pre_payment !== false ?
                <Fragment>
                    <br/>
                    <span className="text-info"> To continue, your should first pay <strong>{sale_buy.pre_payment}</strong> Birr as pre payment.</span>
                <br/>
                <br/>
                <br/>
                <Link to="/ዘ-EQUB/buy/payment"><strong className="btn btn-outline-primary">Pay with your Equb account</strong></Link>
                <br/>
                <br/>
                <Link to="/ዘ-EQUB/buy/payment"><strong className="btn btn-outline-primary">Pay with online payment system</strong></Link>
                </Fragment>
                :
                <Fragment>

                </Fragment>
        );
    }
}
const mapStateToProps=(state)=>({
    sale_buy: state.sale_buy
});
export default connect(mapStateToProps, {salebuyBuyGetPrePayment}) (PayMenu);