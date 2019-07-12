import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {loadPeriodsDataAction, loadMonthDurationsDataAction, loadAmountsDataAction, loadCategoryAction} from "../redux/actions/join/join";
import {Link, Redirect} from "react-router-dom";
import PaymentChoice from "./PaymentChoice";
import './join.css'



class Join extends Component {

    state = {
        periods:null,
        month_durations:null,
        amounts:null,
        redirect:false,
    };

    static propType ={
      joins: PropTypes.array.isRequired,
      loadPeriodsDataAction:PropTypes.func.isRequired,
      loadMonthDurationsDataAction: PropTypes.func.isRequired,
      loadAmountsDataAction: PropTypes.func.isRequired,
      loadCategoryAction: PropTypes.func.isRequired,
      // createStatusAction: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.loadPeriodsDataAction();
        this.props.loadMonthDurationsDataAction();
        this.props.loadAmountsDataAction();
    }

    componentDidUpdate(prevProps, prevState) {
        const {joins}=this.props;

        if(joins.load_cat_err.err === prevProps.joins.load_cat_err.err && joins.selected_category!==null && joins.status===prevProps.joins.status){
            this.setState({
                redirect:true
            });

        }
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };


    onSubmit =(e)=>{
        e.preventDefault();

        const {periods, month_durations, amounts}=this.state;
        this.props.loadCategoryAction(periods, month_durations, amounts)
        console.log(periods,month_durations,amounts);
    };


    render() {
        const {joins} = this.props;

        const periods_list = joins.all_periods.map(periods=>periods.period);
        const month_durations_list = joins.all_month_durations.map(durations=>durations.duration);
        const amount_list = joins.all_amounts.map(amounts=>amounts.amount);
        const select_period = "Choose_Period";
        const select_month_durations = "Select_Duration";
        const select_amount = "Choose_Amount";

        return (
            this.state.redirect? <Redirect to="/ዘ-EQUB/make-payment"/>:
                //  this.state.redirect?
                // <Fragment>
                //     <PaymentChoice/>
                // </Fragment>
                // :

            <Fragment>
                 <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Join Equb</h2>
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>Period</label>
                            <select  name="periods"   onChange={this.onChange} className="form-control">
                                <option>
                                    {select_period}
                                </option>
                                {periods_list.map((value, index) => {
                                    return <option key={index}>{value}</option>
                                })}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Duration</label>
                            <select  name="month_durations"  onChange={this.onChange} className="form-control">
                                <option>
                                    {select_month_durations}
                                </option>
                                {
                                    month_durations_list.map((value,index) => {
                                        return <option key={index}>{value}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Amount</label>
                            <select name="amounts"  onChange={this.onChange} className="form-control">
                                <option>
                                    {select_amount}
                                </option>
                                {
                                    amount_list.map((value,index) => {
                                        return <option key={index}>{value}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-info btn-sm">Join</button>
                        </div>

                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
}
 const mapStateToProps=state=>({
     joins: state.joins
 });

export default connect(mapStateToProps, {loadPeriodsDataAction, loadMonthDurationsDataAction, loadAmountsDataAction, loadCategoryAction})(Join);