import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminAddCategoryAction} from "../redux/actions/admin/admin";
import {loadPeriodsDataAction, loadMonthDurationsDataAction, loadAmountsDataAction, loadCategoryAction} from "../redux/actions/join/join";
class AddCategory extends Component {
    state={
        amount:null,
        period: null,
        duration: null,
        cat_name: null
    };
    static propTypes = {
        admin: PropTypes.array,
        adminAddCategoryAction: PropTypes.array,
        joins: PropTypes.array.isRequired,
        loadPeriodsDataAction:PropTypes.func.isRequired,
        loadMonthDurationsDataAction: PropTypes.func.isRequired,
        loadAmountsDataAction: PropTypes.func.isRequired,
    };

    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    componentDidMount() {
        this.props.loadPeriodsDataAction();
        this.props.loadMonthDurationsDataAction();
        this.props.loadAmountsDataAction();
    }
    onSubmit=e=>{
        e.preventDefault();
        const {admin, adminAddCategoryAction} = this.props;
        if(admin.is_cat_added === false) {

            adminAddCategoryAction(this.state.amount, this.state.period, this.state.duration, this.state.cat_name);
        }
    };
    render() {
        const {admin, joins} = this.props;

        const periods_list = joins.all_periods.map(periods=>periods.period);
        const month_durations_list = joins.all_month_durations.map(durations=>durations.duration);
        const amount_list = joins.all_amounts.map(amounts=>amounts.amount);
        const select_period = "Choose_Period";
        const select_month_durations = "Choose_Month_Duration";
        const select_amount = "Choose_Amount";

        return (
            admin.is_cat_added === true ?
                <Fragment>
                    <strong>Category successfully added!</strong>
                </Fragment>
                :
            <Fragment>
                <div className="col-md-12">
                 <div className="card card-body mt-5">
                    {/*<h2 className="text-center">Add Category</h2>*/}
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Category Name</label>
                            <input type="text" name="cat_name" value={this.state.cat_name} onChange={this.onChange}  className="form-control" required="true"/>
                        </div>
                        <div className="form-group">
                            <label>Period</label>
                            <select  name="period"   onChange={this.onChange} className="form-control">
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
                            <select  name="duration"  onChange={this.onChange} className="form-control">
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
                            <select name="amount"  onChange={this.onChange} className="form-control">
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
                            <button type="submit" className="btn btn-info btn-sm">Add</button>
                        </div>
                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
    }

const mapStateToProps=(state)=>({
    admin: state.admin,
    joins: state.joins
});
export default connect(mapStateToProps, {adminAddCategoryAction, loadPeriodsDataAction, loadMonthDurationsDataAction, loadAmountsDataAction, loadCategoryAction}) (AddCategory);
