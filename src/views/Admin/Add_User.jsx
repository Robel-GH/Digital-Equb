import React from "react";
import AddUser from "../../components/admin/AddUser";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";
import ManageUser from "./ManageUser";
import AddPeriod from "./Manage Category Parameter";

class Add_User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                    <h3>Add User</h3>
                </CardHeader>
                <CardBody>
                    <AddUser/>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default Add_User;
