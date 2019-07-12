import React from "react";
import ManageGroup from "../../components/admin/ManageGroups";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";
import ManageUser from "../../components/admin/ManageUser";

class ManageUsers extends React.Component {
  render() {
    return (
      <>
        <div className="content">
            <ManageUser/>
        </div>
      </>
    );
  }
}

export default ManageUsers;