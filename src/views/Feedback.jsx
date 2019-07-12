import React from "react";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";

class Feedback extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <h2>Give Feedback</h2>
              <FormGroup>
                <label>Title</label>
                <Input
                    cols="80"
                    defaultValue="Write a feedback"
                    placeholder="Here can be your description"
                    rows="6"
                    type="text"
                />
                <label>Content</label>
                <Input
                    cols="80"
                    defaultValue="Write a feedback"
                    placeholder="Here can be your description"
                    rows="6"
                    type="textarea"
                />
                <Button className="btn-fill" color="info" type="submit">
                    Send
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Feedback;
