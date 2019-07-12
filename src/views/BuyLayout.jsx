import React from "react";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";
import Buy from "../components/sale_buy/Buy";

class BuyLayout extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Buy/>
        </div>
      </>
    );
  }
}

export default BuyLayout;
