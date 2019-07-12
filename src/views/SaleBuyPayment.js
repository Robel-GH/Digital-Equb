import React from "react";
import StripeCheckout from 'react-stripe-checkout';
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
import PayOnline from "./Dashboard";
import FirstPayOnline from "../components/join/FirstPayOnline";
import PayMenu from "../components/sale_buy/PayMenu";
import SaleBuyPayManual from "../components/sale_buy/SaleBuyPayManual";
import SaleBuyPayOnline from "../components/sale_buy/SaleBuyPayOnline";

class SaleBuyPayment extends React.Component {
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

                    <SaleBuyPayManual/>



                </CardBody>
              </Card>
            </Col>
             <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                  <h3>Online Payment</h3>
                </CardHeader>
                <CardBody>

                    <SaleBuyPayOnline/>



                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>

      </>
    );
  }
}

export default SaleBuyPayment;
