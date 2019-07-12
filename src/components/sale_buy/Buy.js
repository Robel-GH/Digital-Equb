import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {salebuySaleAction, setSaleBuyIdAction} from "../redux/actions/sale_buy/sale_buy";
import PayMenu from "./PayMenu";

class Buy extends Component {
    static propTypes = {
        sale_buy: PropTypes.array,
        login: PropTypes.array,
        salebuySaleAction: PropTypes.func,
        setSaleBuyIdAction: PropTypes.func
    };
    buyButtonHandler=(id)=>{
        this.props.setSaleBuyIdAction(id)
    };
    render() {
        const {login, sale_buy} = this.props;
        const group_name_array = login.user.user_groups.map(users=>users.group_name);
        return (
            sale_buy.sale_buy_id !== false?
                <Fragment>
                    <PayMenu/>
                </Fragment>
                :
            <Fragment>
                {
                     group_name_array.map((value, index) => {
                         const outer_index = index;
                         return login.user.user_groups[outer_index].sale_buy.map((value, index) => {
                             return login.user.user_groups[outer_index].sale_buy[index].is_sold === false ?
                                 <div className="col-md-12 ">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">{group_name_array[outer_index]}</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     SEASON
                                                 </th>
                                                 <th>
                                                     ORIGINAL AMOUNT
                                                 </th>
                                                 <th>
                                                     PURCHASE AMOUNT
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             <tr key={index}>
                                                 <td>{login.user.user_groups[outer_index].sale_buy[index].season}</td>
                                                 <td>{login.user.user_groups[outer_index].sale_buy[index].original_amount}</td>
                                                 <td>{login.user.user_groups[outer_index].sale_buy[index].purchase_amount}</td>
                                                 <td><button className="btn btn-sm btn-info" onClick={()=>this.buyButtonHandler(login.user.user_groups[outer_index].sale_buy[index].id)}>Buy</button></td>
                                             </tr>
                                             </tbody>
                                         </table>
                                     </div>
                                 </div>
                                 :
                                 <h1> </h1>
                         })

                     })

                 }
            </Fragment>
        );
    }
}

const mapStateToProps=(state)=>({
    sale_buy: state.sale_buy,
    login: state.login,
});
export default connect(mapStateToProps, {salebuySaleAction, setSaleBuyIdAction}) (Buy);