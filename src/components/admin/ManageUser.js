import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminGetUsersAction, adminDeleteUsersAction} from "../redux/actions/admin/admin";

class ManageUser extends Component {
    static propTypes = {
        admin: PropTypes.array,
        adminGetUsersAction: PropTypes.func,
        adminDeleteUsersAction: PropTypes.func,
    };
    componentDidMount() {
        const {admin, adminGetUsersAction} = this.props;
        if(admin.is_user === false)
           adminGetUsersAction()
    }
    buttonHandler=(id)=>{
        const {admin, adminDeleteUsersAction} = this.props;
        if(admin.is_user_deleted === false)
            adminDeleteUsersAction(id)

};

    render() {
        const {admin} = this.props;
        return (
            admin.is_user === true ?
            <Fragment>
                <div className="col-md-12">
                                     <div className="card card-body mt-5">
                                         <h3><span className="text-info text-sm">Users</span></h3>
                                         <table className="table table-striped">
                                             <thead>
                                             <tr>
                                                 <th>
                                                     FIRST NAME
                                                 </th>
                                                 <th>
                                                     LAST NAME
                                                 </th>
                                                 <th>
                                                     PHONE NUMBER
                                                 </th>
                                                 <th>
                                                 </th>
                                                 <th>

                                                 </th>
                                             </tr>
                                             </thead>
                                             <tbody>
                                             {
                                                 admin.user.map((value, index) =>{
                                                 return <tr key={index}>
                                                     <td>{admin.user[index].first_name}</td>
                                                     <td>{admin.user[index].last_name}</td>
                                                     <td>{admin.user[index].phone_number}</td>
                                                     <td><button className="btn btn-sm btn-outline-danger" onClick={()=>this.buttonHandler(admin.user[index].id)}><span>delete</span></button></td>

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
export default connect(mapStateToProps, {adminGetUsersAction, adminDeleteUsersAction})(ManageUser);