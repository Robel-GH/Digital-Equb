import React from "react";
import Group from '../components/join/Group'
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import Status from "../components/status/Status";

class JoinedEqub extends React.Component {

  render() {
    return (
      <>
        <div className="content">

          <Status/>
        </div>
      </>
    );
  }
}

export default JoinedEqub;
