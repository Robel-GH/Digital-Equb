import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {updateUserProfileAction} from "../components/redux/actions/accounts/login";

class UserProfile extends React.Component {
  static propTypes = {
    login: PropTypes.array,
    updateUserProfileAction: PropTypes.func
  };
  state ={
      firstName: this.props.login.user.first_name,
      lastName: this.props.login.user.last_name,
      phoneNumber: this.props.login.user.phone_number,
      email: this.props.login.user.email,
      password: this.props.login.user.password,
      confirmPassword: this.props.login.user.password,
    };
  onChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmit=e=>{
        e.preventDefault();
        const {firstName,lastName,email,phoneNumber,password,confirmPassword}=this.state;
        const {updateUserProfileAction} = this.props;
        if(password === confirmPassword){
          updateUserProfileAction(firstName,lastName,email,phoneNumber,password);
        }
    };

  render() {
    const {login} = this.props;
    const {firstName,lastName,phoneNumber,email,password, confirmPassword}=this.state;
    return (
      <>
        <div className="content">
          <Row>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("assets/img/images.jpg")}
                      />
                      <h5 className="title">{login.user.first_name} {login.user.last_name}</h5>
                    </a>
                    {/*<p className="description">Ceo/Co-Founder</p>*/}
                  </div>
                  <div className="card-description">
                   <h6 className="title">First Name: {login.user.first_name} </h6>
                    <h6 className="title">Last Name: {login.user.last_name} </h6>
                    {/*<h6 className="title">Membrship <span>Pro</span></h6>*/}
                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    <Row>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            placeholder={login.user.phone_number}
                            type="text"
                             name="phoneNumber"
                            value={phoneNumber}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="8">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder={login.user.email}
                                 type="email"
                            name="email"
                            value={email}
                            onChange={this.onChange}/>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder={login.user.first_name}
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>

                          <label>Last Name</label>
                          <Input
                            placeholder={login.user.last_name}
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={this.onChange}
                          />
                        </FormGroup>
                      </Col>

                    </Row>

                    <CardFooter>
                  <Button className="btn-fill" color="info" type="submit">
                    Save
                  </Button>
                </CardFooter>
                  </Form>
                </CardBody>
                {/*<CardFooter>*/}
                  {/*<Button className="btn-fill" color="primary" type="submit">*/}
                    {/*Save*/}
                  {/*</Button>*/}
                {/*</CardFooter>*/}
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
const stateToPropsMap=(state) =>({
  login: state.login
});

export default connect(stateToPropsMap, {updateUserProfileAction}) (UserProfile);
