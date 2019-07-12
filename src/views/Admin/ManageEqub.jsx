import React from "react";
import ManageGroup from "../../components/admin/ManageGroups";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";

class ManageEqub extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <ManageGroup/>
        </div>
      </>
    );
  }
}

export default ManageEqub;
