import React from "react";
import ManageGroup from "../../components/admin/ManageGroups";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";
import ManageUser from "../../components/admin/ManageUser";
import FirstPayment from "../MakePayment";
import AddPeriod from "../../components/admin/AddPeriod";
import AddDuration from "../../components/admin/AddDuration";
import AddAmount from "../../components/admin/AddAmount";

class ManageCat extends React.Component {
  render() {
    return (
      <>
        <div className="content">
            <Row>
            <Col xs="4">
              <Card className="card-chart">
                <CardHeader>
                    <h3>Add Period</h3>
                </CardHeader>
                <CardBody>
                    <AddPeriod/>
                </CardBody>
              </Card>
            </Col>
             <Col xs="4">
              <Card className="card-chart">
                <CardHeader>
                  <h3>Add Duration</h3>
                </CardHeader>
                <CardBody>

                    <AddDuration/>



                </CardBody>
              </Card>
            </Col>
             <Col xs="4">
              <Card className="card-chart">
                <CardHeader>
                  <h3>Add Amount</h3>
                </CardHeader>
                <CardBody>

                    <AddAmount/>



                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default ManageCat;