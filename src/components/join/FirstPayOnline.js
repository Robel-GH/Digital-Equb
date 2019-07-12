import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {setSelectedAmount, stripeCharges, createStatusAction} from "../redux/actions/join/join";
import StripeCheckout from 'react-stripe-checkout';
import {Redirect} from "react-router-dom";

class FirstPayOnline extends Component {

    state={
        paid_amount:null,
        redirect: false,
    };

     static propType = {
        pay: PropTypes.array,
        joins: PropTypes.array,
        setSelectedAmount: PropTypes.func,
        stripeCharges: PropTypes.func,
        createStatusAction: PropTypes.func
    };


     componentDidMount() {
        if(this.props.joins.status===null){
            this.props.createStatusAction()
        }
    }
    componentDidUpdate(prevProps, prevState) {
         const {joins}=this.props;
        if(joins.group_id!==null){
            this.setState({
                redirect:true
            });

        }
    }

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        this.props.setSelectedAmount(this.state.paid_amount)
    };

    handleTokens=(token)=>{
         const {stripeCharges} = this.props;
            stripeCharges(token.id, token.email);
    };

    render() {
        const {joins} = this.props;
        if(this.state.redirect === true){
            return (
                <Redirect to="/ዘ-EQUB/group-name"/>
            )
        }
        if(joins.is_online_amount === true){
            return (
            <Fragment>
               <div className="col-md-12">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Pay the Equb using credit card online</h2>
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Amount</label>
                            <input type="text" name="paid_amount" value={this.state.paid_amount} onChange={this.onChange} data-format="+2 (ddd) ddd-dddd" className="form-control" required="true"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-sm">Pay</button>
                        </div>
                    </form>
                 </div>
               </div>
            </Fragment>
        );
        }
        if(joins.online_amount !== false && joins.stripe_pub_key !== false){
            return (
                <Fragment>
                    <StripeCheckout token={this.handleTokens}
                                    stripeKey={joins.stripe_pub_key}
                                    amount={joins.online_amount * 100}
                    />
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
    pay: state.pay,
    joins: state.joins
});
export default connect(mapStateToProps, {setSelectedAmount, stripeCharges, createStatusAction})(FirstPayOnline);