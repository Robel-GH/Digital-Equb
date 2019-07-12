import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {adminAddUserAction, adminGetFeedbackAction} from "../redux/actions/admin/admin";

class Feedbacks extends Component {
    static propTypes ={
      admin: PropTypes.array.isRequired,
      adminGetFeedbackAction: PropTypes.func.isRequired,
    };
    componentDidMount() {
        if(this.props.admin.get_feedback === false)
            this.props.adminGetFeedbackAction()
    }

    render() {
        const {admin} = this.props;
        if(this.props.admin.get_feedback === true) {
            const feedback = admin.feedback.map(feed => feed.feedback);
            const contact = admin.feedback.map(contact => contact.contact);
            return (
            <Fragment>
                 <div className="col-md-6 m-auto">
                        <div className="card card-body mt-5">
                            <h3><span className="text-info text-sm">Feedback's List</span>
                            </h3>

                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th>
                                        FeedBack
                                    </th>
                                    <th>
                                        Contact
                                    </th>
                                </tr>
                                </thead>

                                <tbody>

                                {
                                    feedback.map((value, index) => {
                                        return <tr key={index}>{
                                            <td>{value}</td>

                                        }
                                        {
                                            <td>{contact[index]}</td>
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
        return (
            <Fragment>

            </Fragment>
        )

    }
}
const mapStateToProps = (state)=>({
    admin: state.admin
});
export default connect(mapStateToProps, {adminGetFeedbackAction}) (Feedbacks);