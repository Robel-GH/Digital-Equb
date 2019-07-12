import React from "react";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";
import Group from "../components/join/Group";

class GroupName extends React.Component {
  render() {
    return (
      <>
        <div className="content">
            <Group/>
        </div>
      </>
    );
  }
}

export default GroupName;
