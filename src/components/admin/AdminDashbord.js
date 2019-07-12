import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class AdminDashbord extends Component {
    render() {
        return (
            <Fragment>
                <Link to="/admin/add_user">Add User</Link><br/>
                <Link to="/admin/feedback">Feed back</Link><br/>
                <Link to="/admin/manage_groups">Manage Groups</Link><br/>
                <Link to="/admin/add_period">Add Period</Link><br/>
                <Link to="/admin/add_duration">Add Duration</Link><br/>
                <Link to="/admin/add_amount">Add Amount</Link><br/>
                <Link to="/admin/add_category">Add Category</Link><br/>
                <Link to="/admin/get_activities">Activities</Link><br/>
                <Link to="/admin/manage_user">Manage User</Link><br/>
                <Link to="/admin/balance">Balance</Link><br/>
            </Fragment>
        );
    }
}

export default AdminDashbord;