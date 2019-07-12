import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {statusGetWinnersAction, statusGetSaleLots} from "../redux/actions/status/status";
import {setSelectedCatAndGroupId} from "../redux/actions/pay/pay";
import {saleSetSelectedCatAndGroupId} from "../redux/actions/sale_buy/sale_buy";
import {Link, Redirect} from "react-router-dom";

class StatusDetail extends Component {
    static propTypes = {
        statusGetWinnersAction:PropTypes.func.isRequired,
        status:PropTypes.array.isRequired,
        login:PropTypes.array,
        pay:PropTypes.array,
        setSelectedCatAndGroupId: PropTypes.func,
        saleSetSelectedCatAndGroupId: PropTypes.func,
        sale_buy: PropTypes.array,
        statusGetSaleLots: PropTypes.func
    };

    componentDidMount() {
        const {status, statusGetSaleLots, login}= this.props;
        if(status.is_sale_lots === false)
            statusGetSaleLots(login.user.id)
    }
    buttonHandler (selected_group_id, selected_cat_id){
        const {setSelectedCatAndGroupId, status, pay} = this.props;
        if(status.is_winners_loaded === true && pay.selected_cat_id === false){
            setSelectedCatAndGroupId(selected_group_id, selected_cat_id)
        }

    };

    sellButtonHandler (selected_group_id, selected_cat_id, season){
        const {saleSetSelectedCatAndGroupId, sale_buy, status} = this.props;
        if(status.is_winners_loaded === true && sale_buy.sale_cat_id === false){
            saleSetSelectedCatAndGroupId(selected_group_id, selected_cat_id, season)
        }
    }

    render() {

         const {status, login, pay, sale_buy} = this.props;
         const group_name_array = login.user.user_groups.map(users=>users.group_name);
         const group_id_array = login.user.user_groups.map(users=>users.id);
         const group_cat_array =  login.user.user_groups.map(groups=>groups.category);
         const current = login.current_date;
         const year = current.slice(0, 4);
         const month = current.slice(5, 7);
         const day = current.slice(8 ,10);
         const total_current_day = parseInt(year)*365 + parseInt(month)*30 + parseInt(day);


         if(pay.selected_cat_id !== false && pay.selected_group_id !== false){
             return (
                 <Redirect to="/ዘ-EQUB/next-season-payment"/>
             )
         }

         if(sale_buy.sale_cat_id !== false && sale_buy.sale_group_id !== false){
             return (
                 <Redirect to="/ዘ-EQUB/selling-price"/>
             )
         }
         if ((pay.selected_cat_id === false && pay.selected_group_id === false) && status.is_winners_loaded === true && status.is_sale_lots === true) {
             return <Fragment>
                 {
                     group_id_array.map((value, index) => {
                         const outer_index = index;
                         return <div className="col-md-12">
                             <div className="card card-body mt-5">
                                 <h3><span className="text-info text-sm">{group_name_array[index]}</span> Activities
                                 </h3>
                                 <table className="table table-striped">
                                     <thead>
                                     <tr>
                                         <th>
                                             SEASON
                                         </th>
                                         <th>
                                             WINNER
                                         </th>
                                         <th>
                                         </th>
                                     </tr>
                                     </thead>
                                     <tbody>
                                     {
                                         status.winners[value].map((value, index) => {
                                             return <tr key={index}>
                                                 <td>{index + 1}</td>
                                                 <td>{value}</td>
                                                 <td>{login.user.user_groups[outer_index].is_closed === false && value === login.user.phone_number && status.sale_lots[outer_index] === false? <button className="btn btn-sm btn-info" onClick={()=>this.sellButtonHandler(group_id_array[outer_index], group_cat_array[outer_index], index+1)}>Sell</button>:<h1> </h1>}</td>
                                             </tr>
                                         })
                                     }
                                     </tbody>
                                     <br/>
                                     {
                                         // This conditional statement checks weather the payment day is reached or not
                                         // login.user.user_groups[index].is_active === true && ((((parseInt(login.user.user_groups[index].activation_time.activated_at.slice(0, 4))*365 + parseInt(login.user.user_groups[index].activation_time.activated_at.slice(5, 7))*30 + parseInt(login.user.user_groups[index].activation_time.activated_at.slice(8, 10))) !== total_current_day) && ((((parseInt(login.user.user_groups[index].activation_time.activated_at.slice(0, 4))*365 + parseInt(login.user.user_groups[index].activation_time.activated_at.slice(5, 7))*30 + parseInt(login.user.user_groups[index].activation_time.activated_at.slice(8, 10))) - total_current_day)%(parseInt(login.user.user_groups[index].period)))) === 0)) ?(
                                        login.user.user_groups[index].is_active === true &&  ((parseInt(login.user.user_groups[index].activation_time.activated_at.slice(0, 4))*365 + parseInt(login.user.user_groups[index].activation_time.activated_at.slice(5, 7))*30 + parseInt(login.user.user_groups[index].activation_time.activated_at.slice(8, 10))) - total_current_day) === 0?(
                                             <button className="btn btn-sm btn-outline-primary" onClick={()=>this.buttonHandler(group_id_array[index], group_cat_array[index])}><span>Pay for next season</span></button>):
                                             <h1> </h1>
                                     }
                                 </table>
                             </div>
                         </div>
                     })

                 }
             </Fragment>
         }
        return (

            <Fragment>

            </Fragment>
        );
    }
}
const mapStateToProps =(state)=>({
    status:state.status,
    login:state.login,
    pay: state.pay,
    sale_buy: state.sale_buy,
});

export default connect(mapStateToProps, {statusGetWinnersAction, setSelectedCatAndGroupId, saleSetSelectedCatAndGroupId, statusGetSaleLots})(StatusDetail);