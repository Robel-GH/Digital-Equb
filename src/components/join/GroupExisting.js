import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getGroupDataAction, setGroupNameAction, getGroupMembersAction, getWinnersAction} from "../redux/actions/join/join";
import {Link, Redirect} from "react-router-dom";

class GroupExisting extends Component {
    static propTypes ={
      joins: PropTypes.array.isRequired,
      getGroupDataAction: PropTypes.func.isRequired,
      setGroupNameAction: PropTypes.func.isRequired,
      getGroupMembersAction: PropTypes.func.isRequired,
      getWinnersAction: PropTypes.func.isRequired,
    };
    //
    // state={
    //     g_name:""
    // };
    componentDidMount() {
        if(this.props.joins.group_data.season===1) {
            this.props.getWinnersAction()
        }
    }
    onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    // onSubmit=e=>{
    //     e.preventDefault();
    //     this.props.setGroupNameAction(this.state.g_name)
    // };


    render() {

         const {joins} = this.props;

        if (joins.is_winners_loaded === true) {


            // const group_members = joins.group_data.groups_data.map(members=>members.member);
            // const group_season = joins.group_data.map(groups_data=>groups_data.groups_data);

            // console.log(group_members);
            // console.log(group_season);

            return (
                <Fragment>
                    <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h3><span className="text-info text-sm">{this.props.joins.groups_name}</span> Member's List
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
                                    joins.group_members.map((value, index) => {
                                        return <tr key={index}>{
                                            <td>{value}</td>
                                        }
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                            <br/>
                            <h3><span className="text-info text-sm">{this.props.joins.groups_name}</span> Activities
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
                                    joins.winners.map((value, index) => {
                                        return <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{value}</td>
                                        </tr>
                                    })
                                }
                                {/*{*/}
                                {/*group_season.season.map((value,index)=>{*/}
                                {/*return <tr key={index}>*/}
                                {/*/!*{*!/*/}
                                {/*/!*<td>{group_members[index]}</td>*!/*/}
                                {/*/!*}*!/*/}
                                {/*{*/}
                                {/*<td>{value}</td>*/}
                                {/*}*/}
                                {/*{*/}
                                {/*<td>*/}
                                {/*<button  className="btn btn-danger btn-sm">Delete</button>*/}
                                {/*</td>*/}
                                {/*}*/}
                                {/*</tr>*/}
                                {/*})*/}
                                {/*}*/}
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
                            <h3><span className="text-info text-sm">{this.props.joins.groups_name}</span> Member's List
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
                                    joins.group_members.map((value, index) => {
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

const mapStateToProps=state=>({
     joins: state.joins
 });

export default connect(mapStateToProps, {getGroupDataAction, setGroupNameAction, getGroupMembersAction, getWinnersAction}) (GroupExisting);
