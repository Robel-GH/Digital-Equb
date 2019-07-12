import React from "react";
import AddUser from "../../components/admin/AddUser";

// reactstrap components
import {Card, CardHeader, CardBody, CardTitle, Row, Col, FormGroup, Input, Button} from "reactstrap";
import AddCategory from "../../components/admin/AddCategory";
import AddPeriod from "./Manage Category Parameter";

class Category extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="8">
              <Card className="card-chart">
                <CardHeader>
                    <h3>Add Category</h3>
                </CardHeader>
                <CardBody>
                    <AddCategory/>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </div>

      </>
    );
  }
}

export default Category;
