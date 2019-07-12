import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {salebuySaleAction} from "../redux/actions/sale_buy/sale_buy";
import PropTypes from "prop-types"

class Sale extends Component {
    state={
        purchase_amount:null,
    };

    static propTypes = {
        sale_buy: PropTypes.array,
        salebuySaleAction: PropTypes.func
};
    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        this.props.salebuySaleAction(this.state.purchase_amount)
    };
    render() {
        const {sale_buy} = this.props;
        return (
            sale_buy.is_sold === true ?
            <Fragment>
                <span className="text-md-center text-success">You have successfully sold your equb!</span>
            </Fragment>
            :
            <Fragment>
                <div className="col-md-12">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Purchase Amount</h2>
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Amount</label>
                            <input type="number" name="purchase_amount" value={this.state.purchase_amount} onChange={this.onChange} className="form-control" required="true"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-sm">Sell</button>
                        </div>
                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
}

const mapStateToProps=state=>({
    sale_buy:state.sale_buy
});
export default connect(mapStateToProps, {salebuySaleAction}) (Sale);