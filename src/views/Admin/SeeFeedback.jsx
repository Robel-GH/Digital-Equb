import React from "react";
import Feedbacks from "../../components/admin/Feedbacks";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";

class SeeFeedback extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Feedbacks/>
        </div>
      </>
    );
  }
}

export default SeeFeedback;
