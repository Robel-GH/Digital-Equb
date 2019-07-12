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
import PayOnline from "./Dashboard";
import FirstPayOnline from "../components/join/FirstPayOnline";
import PayMenu from "../components/sale_buy/PayMenu";
import Sale from "../components/sale_buy/Sale";
import AddPeriod from "./Admin/Manage Category Parameter";

class Sell_Price extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                    <h3>Sell Equb</h3>
                </CardHeader>
                <CardBody>
                      <Sale/>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>

      </>
    );
  }
}

export default Sell_Price;
