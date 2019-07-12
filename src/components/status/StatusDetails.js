import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {statusGetWinnersAction} from "../redux/actions/status/status";
import {Link} from "react-router-dom";

class StatusDetails extends Component {

    static propTypes = {
        statusGetWinnersAction:PropTypes.func.isRequired,
        status:PropTypes.array.isRequired,
        login:PropTypes.array,
        pay:PropTypes.array
    };
    componentDidMount() {
        const {status, statusGetWinnersAction, login} = this.props;
        if(login.user.user_groups.season !== 0 && status.is_winners_loaded === false) {
            statusGetWinnersAction()
        }
    }
    render() {
        const {status, login, pay} = this.props;
        const group_name_array = login.user.user_groups.map(users=>users.group_name);
        const group_name = group_name_array[0];
        const members_group_data_array = login.user.members_group_data.map(users=>users);
        const group_season_array = login.user.user_groups.map(users=>users.season);
        const group_season = group_season_array[0];
        const seasons_length = members_group_data_array[0].seasons.length;
        // // const activated_at_array3 = activated_at_array2.map(activate=>activate.activated_at);
        // const current = login.current_date;
        // const year = current.slice(0, 4);
        // const month = current.slice(5, 7);
        // const day = current.slice(8 ,10);
        // const total_current_day = parseInt(year)*365 + parseInt(month)*30 + parseInt(day);

        if (status.is_winners_loaded === true) {


            return (
                seasons_length === group_season && pay.isPayed === false ?
                <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h3><span className="text-info text-sm">{group_name}</span> Member's List
                            </h3>

                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>
                                        MEMBER
                                    </th>
                                </tr>
                                </thead>

                                <tbody>

                                {
                                    status.group_members.map((value, index) => {
                                        return <tr key={index}>{
                                            <td>{value}</td>
                                        }
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                            <br/>
                            <h3><span className="text-info text-sm">{group_name}</span> Activities
                            </h3>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    {/*<th>*/}
                                    {/*SEASON*/}
                                    {/*</th>*/}
                                    <th>
                                        SEASON
                                    </th>
                                    <th>
                                        WINNER
                                    </th>
                                    <th/>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    status.winners.map((value, index) => {
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{value}</td>
                                        </tr>
                                    })
                                }

                                </tbody>
                                <br/>

                                <Link to="/payment"><strong className="btn btn-sm btn-outline-primary ">Pay for next season</strong></Link>
                            </table>

                        </div>
                    </div>
                </Fragment>
                    :
                    <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h3><span className="text-info text-sm">{group_name}</span> Member's List
                            </h3>

                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>
                                        MEMBER
                                    </th>
                                </tr>
                                </thead>

                                <tbody>

                                {
                                    status.group_members.map((value, index) => {
                                        return <tr key={index}>{
                                            <td>{value}</td>
                                        }
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                            <br/>
                            <h3><span className="text-info text-sm">{group_name}</span> Activities
                            </h3>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    {/*<th>*/}
                                    {/*SEASON*/}
                                    {/*</th>*/}
                                    <th>
                                        SEASON
                                    </th>
                                    <th>
                                        WINNER
                                    </th>
                                    <th/>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    status.winners.map((value, index) => {
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{value}</td>
                                        </tr>
                                    })
                                }

                                </tbody>
                            </table>

                        </div>
                    </div>
                </Fragment>
            )
        }

        return (
            <Fragment>
                <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h3><span className="text-info text-sm">{group_name}</span> Member's List
                            </h3>

                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>
                                        MEMBER
                                    </th>
                                </tr>
                                </thead>

                                <tbody>

                                {
                                    status.group_members.map((value, index) => {
                                        return <tr key={index}>{
                                            <td>{value}</td>
                                        }
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                </div>
            </Fragment>
        );
    }

}

const mapStateToProps =(state)=>({
    status:state.status,
    login:state.login,
    pay: state.pay
});
export default connect(mapStateToProps, {statusGetWinnersAction}) (StatusDetails);