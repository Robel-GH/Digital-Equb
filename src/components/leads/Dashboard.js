import React,{Component,Fragment} from 'react';
import Form from "./Form";
//import Leads from "./Leads";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getLeads,deleteLeads} from "../redux/actions/leads";


class Dashboard extends Component{
    componentDidMount() {
        this.props.getLeads();
    }
    static propType={
        user:PropTypes.array.isRequired,
        getLeads:PropTypes.func.isRequired,
        deleteLeads:PropTypes.func.isRequired,
    };


    render() {
        return(
            <Fragment>
                <h3>Member's List</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            NAME
                        </th>
                        <th>
                            EMAIL
                        </th>
                        <th>
                            PHONE_NO
                        </th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.user.map(display=>(
                            <tr key={display.id}>
                                <td>
                                    {display.id}
                                </td>
                                <td>
                                    {display.userName}
                                </td>
                                <td>
                                    {display.email}
                                </td>
                                 <td>
                                    {display.phoneNo}
                                </td>
                                <td>
                                    <button onClick={this.props.deleteLeads.bind(this,display.id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Form/>
            </Fragment>
        )
    }
}
const mapStateToProps=state=>({
    user:state.profile.users
});

export default connect(mapStateToProps,{getLeads,deleteLeads})(Dashboard);