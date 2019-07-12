import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {adminGetActivitiesAction, adminGetPeriodsAction, adminGetAmountsAction, adminGetDurationsAction, adminGetCategoryAction} from "../redux/actions/admin/admin";

class Activities extends Component {
    static propTypes ={
        admin:PropTypes.array,
        adminGetActivitiesAction: PropTypes.func,
        adminGetPeriodsAction: PropTypes.func,
        adminGetAmountsAction: PropTypes.func,
        adminGetDurationsAction: PropTypes.func,
        adminGetCategoryAction: PropTypes.func,
    };
    componentDidMount() {
        const {admin, adminGetActivitiesAction, adminGetPeriodsAction, adminGetAmountsAction, adminGetDurationsAction, adminGetCategoryAction} = this.props;
        if(admin.is_activities === false && admin.is_periods === false && admin.is_durations === false && admin.is_amounts === false && admin.is_category === false)
            adminGetPeriodsAction();
            adminGetAmountsAction();
            adminGetDurationsAction();
            adminGetActivitiesAction();
            adminGetCategoryAction();
    }

    render() {
        const {admin} = this.props;
        return (
            admin.is_activities === true && admin.is_periods === true && admin.is_durations === true && admin.is_amounts === true && admin.is_category === true?
            <Fragment>
                 <div className="col-md-12">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">Activities</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     ID
                                                 </th>
                                                 <th>
                                                     CATEGORY
                                                 </th>
                                                 <th>
                                                     COUNTER
                                                 </th>
                                                 <th>
                                                     GROUP COUNTER
                                                 </th>
                                                 <th>
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             {
                                                 admin.activities.map((value, index) =>{
                                                 return <tr key={index}>
                                                     <td>{admin.activities[index].id}</td>
                                                     <td>{admin.activities[index].category}</td>
                                                     <td>{admin.activities[index].counter}</td>
                                                     <td>{admin.activities[index].group_counter}</td>

                                                 </tr>
                                                 })}
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                <div className="col-md-12">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">Categories</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     ID
                                                 </th>
                                                 <th>
                                                     CATEGORY NAME
                                                 </th>
                                                 <th>
                                                     CATEGORY PERIOD
                                                 </th>
                                                 <th>
                                                     CATEGORY DURATION
                                                 </th>
                                                 <th>
                                                     CATEGORY AMOUNT
                                                 </th>
                                                 <th>
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             {
                                                 admin.category.map((value, index) =>{
                                                 return <tr key={index}>
                                                     <td>{admin.category[index].id}</td>
                                                     <td>{admin.category[index].cat_name}</td>
                                                     <td>{admin.category[index].cat_duration}</td>
                                                     <td>{admin.category[index].cat_period}</td>
                                                     <td>{admin.category[index].cat_amount}</td>
                                                 </tr>
                                                 })}
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                <div className="col-md-12">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">Periods</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     ID
                                                 </th>
                                                 <th>
                                                     PERIODS
                                                 </th>
                                                 <th>
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             {
                                                 admin.periods.map((value, index) =>{
                                                 return <tr key={index}>
                                                     <td>{admin.periods[index].id}</td>
                                                     <td>{admin.periods[index].period}</td>

                                                 </tr>
                                                 })}
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                 <div className="col-md-12">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">Durations</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     ID
                                                 </th>
                                                 <th>
                                                     DURATION
                                                 </th>
                                                 <th>
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             {
                                                 admin.durations.map((value, index) =>{
                                                 return <tr key={index}>
                                                     <td>{admin.durations[index].id}</td>
                                                     <td>{admin.durations[index].duration}</td>

                                                 </tr>
                                                 })}
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                 <div className="col-md-12">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">Amounts</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     ID
                                                 </th>
                                                 <th>
                                                     Amount
                                                 </th>
                                                 <th>
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             {
                                                 admin.amounts.map((value, index) =>{
                                                 return <tr key={index}>
                                                     <td>{admin.amounts[index].id}</td>
                                                     <td>{admin.amounts[index].amount}</td>

                                                 </tr>
                                                 })}
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
            </Fragment>
                :
            <Fragment>

            </Fragment>
        );
    }
}
const mapStateToProps=state=>({
     admin: state.admin
 });
export default connect(mapStateToProps, {adminGetActivitiesAction, adminGetPeriodsAction, adminGetAmountsAction, adminGetDurationsAction, adminGetCategoryAction})(Activities);