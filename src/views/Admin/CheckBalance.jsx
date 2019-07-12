import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "../../variables/charts";
import Activities from "../../components/admin/Activities";
import Balance from "../../components/admin/Balance";
import AddPeriod from "./Manage Category Parameter";
// import GroupName from "../components/join/GroupName";
// import GroupDetail from "../components/join/GroupDetail";

class CheckBalance extends React.Component {


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="6">
              <Card className="card-chart">
                <CardHeader>
                    <h2>Current Balance</h2>
                </CardHeader>
                <CardBody>
                    <Balance/>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>
      </>
    );
  }
}

export default CheckBalance;
