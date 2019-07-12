import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {firstPaymentAction, createStatusAction} from "../redux/actions/join/join";
import {Link, Redirect} from "react-router-dom";


class FirstPayment extends Component {

    state={
        paid_amount:null,
        redirect: false,
    };

    static propTypes ={
      joins: PropTypes.array.isRequired,
      createStatusAction: PropTypes.func.isRequired,
      firstPaymentAction: PropTypes.func.isRequired
    };

    componentDidMount() {
        if(this.props.joins.status===null){
            this.props.createStatusAction()
        }
    }
    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        this.props.firstPaymentAction(this.state.paid_amount)
    };
    componentDidUpdate(prevProps, prevState) {
        const {joins}=this.props;
        if(joins.group_id!==null){
            this.setState({
                redirect:true
            });

        }
    }

    render() {
        return (
            this.state.redirect === true?
                <Redirect to="/ዘ-EQUB/group-name"/>:
            <Fragment>
               <div className="col-md-12 ">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Pay the Equb using local account</h2>
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
}

const mapStateToProps=state=>({
    joins:state.joins
});
export default connect(mapStateToProps, {firstPaymentAction, createStatusAction}) (FirstPayment);