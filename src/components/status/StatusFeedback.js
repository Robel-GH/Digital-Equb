import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {statusGiveFeedbackAction} from "../redux/actions/status/status";

class StatusFeedback extends Component {
     static propTypes = {
         status:PropTypes.array.isRequired,
         statusGiveFeedbackAction: PropTypes.func.isRequired
     };
     state={
        feedback: "",
        contact: "",
    };
      onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        this.props.statusGiveFeedbackAction(this.state.feedback, this.state.contact)
    };
    render() {
        return (
            this.props.status.is_feedback_gave === true ?
             <Fragment>
                 <strong>Thanks for your feedback!</strong>
             </Fragment>
                :
            <Fragment>
                 <div className="col-md-6 m-auto">
                 <div className="card card-body mt-5">
                    <h2 className="text-center">Give Feedback</h2>
                    <form onSubmit={this.onSubmit}>


                        <div className="form-group">
                            <label>feedback</label>
                            <input type="text" name="feedback" value={this.state.feedback} onChange={this.onChange}  className="form-control" required="true"/>
                        </div>
                         <div className="form-group">
                            <label>contact</label>
                            <input type="text" name="contact" value={this.state.contact} onChange={this.onChange}  className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </form>
                 </div>
               </div>
            </Fragment>
        );
    }
}
const mapStateToProps =(state)=>({
    status:state.status,
});
export default connect(mapStateToProps, {statusGiveFeedbackAction})(StatusFeedback);