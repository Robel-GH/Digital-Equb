import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Join from '../components/join/Join'
// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import FirstPayment from "../components/join/FirstPayment";

class CreateEqub extends React.Component {
  render() {
    return (
      <>
        <div className="content">
            <Fragment>
            <Join/>
            {/*<FirstPayment/>*/}
            </Fragment>

        </div>
      </>
    );
  }
}

export default CreateEqub;
