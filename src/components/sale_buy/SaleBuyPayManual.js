import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {salebuyBuyPayManual} from "../redux/actions/sale_buy/sale_buy";

class SaleBuyPayManual extends Component {

    static propTypes = {
        sale_buy: PropTypes.array,
        salebuyBuyPayManual: PropTypes.func,
    };

    componentDidMount() {
        const {salebuyBuyPayManual, sale_buy} = this.props;
        if(sale_buy.is_manual_paid === false)
            salebuyBuyPayManual()
    }

    render() {
        return (
            this.props.sale_buy.is_manual_paid !== false ?
                <Fragment>
                    <strong className="text-success">Successfully Bought!</strong>
                </Fragment>
                :
                <Fragment>

                </Fragment>
        );
    }
}

const mapStateToProps=(state)=>({
    sale_buy: state.sale_buy,
});
export default connect(mapStateToProps, {salebuyBuyPayManual}) (SaleBuyPayManual);
