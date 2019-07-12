import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";
import {adminGetGroupsAction, adminGetWinnersAction, adminDeleteGroupAction} from "../redux/actions/admin/admin";

class ManageGroups extends Component {
    state = {
        redirect: false
    };
    static propTypes ={
      admin: PropTypes.array.isRequired,
      adminGetGroupsAction: PropTypes.func.isRequired,
      adminGetWinnersAction: PropTypes.func,
      adminDeleteGroupAction: PropTypes.func
    };
    componentDidMount() {
        if(this.props.admin.get_groups === false || this.state.redirect === false)
            this.props.adminGetGroupsAction()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {admin, adminGetWinnersAction}= this.props;
        if(admin.get_groups !== prevProps.admin.get_groups){
            const group_id = admin.groups.map(users=>users.id);
            adminGetWinnersAction(group_id)
        }

    }
    buttonHandler (selected_group_id){
        const {admin, adminDeleteGroupAction} = this.props;
        if(admin.get_winners === true) {
            adminDeleteGroupAction(selected_group_id);
            this.setState({
                redirect: true
            })
        }
    };
    render() {
        const {admin} = this.props;
        if(this.props.admin.get_groups === true && this.props.admin.get_winners === true) {
            const group_name_array = admin.groups.map(users => users.group_name);
            const group_id_array = admin.groups.map(users => users.id);
            const is_active = admin.groups.map(users => users.is_active);
            const is_closed = admin.groups.map(users => users.is_closed);
            return (
                <Fragment>
                    {
                     group_id_array.map((value, index) => {
                         return <div className="col-md-12">
                             <div className="card card-body mt-5">
                                 <h3><span className="text-info text-sm">{group_name_array[index]}</span> Activities {is_active[index]===true? <small className="text-sm text-sm-center">(active)</small>: is_closed[index]===true?<small className="text-sm text-sm-center">(closed)</small>:<small className="text-sm text-sm-center">(pending)</small>}
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
                                     </tr>
                                     </thead>
                                     <tbody>
                                     {
                                         admin.winners[value].map((value, index) => {
                                             return <tr key={index}>
                                                 <td>{index + 1}</td>
                                                 <td>{value}</td>
                                             </tr>
                                         })
                                     }
                                     </tbody>
                                     <br/>
                                     {
                                             <button className="btn btn-sm btn-outline-danger" onClick={()=>this.buttonHandler(group_id_array[index])}><span>Delete Group</span></button>
                                     }
                                 </table>
                             </div>
                         </div>
                     })

                 }
                </Fragment>
            );
        }
        // if(this.state.redirect === true){
        //     return (
        //         <Redirect to="/admin/manage_groups"/>
        //     )
        // }
        return (
            <Fragment>

            </Fragment>
        )
    }
}

const mapStateToProps = (state)=>({
    admin: state.admin
});
export default connect(mapStateToProps, {adminGetGroupsAction, adminGetWinnersAction, adminDeleteGroupAction}) (ManageGroups);
