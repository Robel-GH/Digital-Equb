import React from "react";
import PaymentChoice from '../components/join/PaymentChoice'

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, ButtonGroup, Button
} from "reactstrap";
import FirstPayment from "../components/join/FirstPayment";
import classNames from "classnames";
import PayOnline from "../components/pay/PayOnline";
import FirstPayOnline from "../components/join/FirstPayOnline";
import PayManual from "../components/pay/PayManual";
import PaymentDashboard from "../components/pay/PaymentDashboard";

class NextPayManual extends React.Component {
  render() {
    return (
      <>
        <div className="content">

           <Row>
            <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                  <h3>Local payment</h3>
                </CardHeader>
                <CardBody>

                    <PayManual/>



                </CardBody>
              </Card>
            </Col>

          </Row>
        </div>

      </>
    );
  }
}

export default NextPayManual;
