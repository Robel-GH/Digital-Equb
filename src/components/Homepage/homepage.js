import React from 'react';
import Login from './../accounts/Login';
import Register from './../accounts/Register';
import Carousel_react from './Carousel';
import './homepage.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Jumbotron
} from 'reactstrap';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
    this.state={
        modal1: false
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this);
    this.state={
        modal: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,

    });
  }
  toggleRegisterModal() {
    this.setState(prevState1 => ({
      modal1: !prevState1.modal1
    }));
  }
  toggleLoginModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render(){
    const closeBtn = <button className="close" onClick={this.toggleRegisterModal}>&times;</button>;
    const closeBtn1 = <button className="close" onClick={this.toggleLoginModal}>&times;</button>;

    return (
      <div>
        <Container fluid>
        <Navbar color="light" light expand="md" fluid>
          <NavbarBrand href="/">ዘ-Equb</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about#/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><button className="btn btn-info" onClick={this.toggleLoginModal}>Login</button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#"><button className="btn btn-info" onClick={this.toggleRegisterModal}>Register</button></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        </Container>

         <Modal isOpen={this.state.modal1} toggle={this.toggleRegisterModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleRegisterModal} close={closeBtn}>Register</ModalHeader>
          <ModalBody>
            {/*<form role="form">*/}
              {/*<div className="form-group">*/}
                {/*<label htmlFor="phone"><span className="glyphicon glyphicon-phone-alt"></span> Phone Number</label>*/}
                {/*<input type="number" className="form-control" id="phone" placeholder="Enter Phone Number"/>*/}
              {/*</div>*/}
              {/*<div className="form-group">*/}
                {/*<label htmlFor="accountnumber"><span className="glyphicon glyphicon-lock"></span>Account Number</label>*/}
                {/*<input type="number" className="form-control" id="accountnumber" placeholder="Enter Account Number"/>*/}
              {/*</div>*/}

            {/*</form>*/}
          <Register/>
          </ModalBody>
          <ModalFooter>
           {/*<button type="submit" className="btn btn-info">Register*/}
              {/*</button>{' '}*/}
            <Button color="info" onClick={this.toggleRegisterModal}>Cancel</Button>
          </ModalFooter>
        </Modal>


           <Modal isOpen={this.state.modal} toggle={this.toggleLoginModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleLoginModal} close={closeBtn1}>Login</ModalHeader>
          <ModalBody>
              {/*<form role="form">*/}
                  {/*<div className="form-group">*/}
                      {/*<label htmlFor="phonenumber"><span className="glyphicon glyphicon-phone-alt"></span> Phone Number</label>*/}
                      {/*<input type="number" className="form-control" id="phonenumber" placeholder="Enter Phone Number"/>*/}
                  {/*</div>*/}
                  {/*<div className="form-group">*/}
                      {/*<label htmlFor="password"><span className="glyphicon glyphicon-lock"></span>Password</label>*/}
                      {/*<input type="password" className="form-control" id="password" placeholder="Enter Password"/>*/}
                  {/*</div>*/}
              {/*</form>*/}
              <Login/>
          </ModalBody>
          <ModalFooter>
           {/*<button type="submit" className="btn btn-info">Login*/}
              {/*</button>{' '}*/}
            <button className="btn btn-info" onClick={this.toggleLoginModal}>Cancel</button>
          </ModalFooter>
        </Modal>

        <Container fluid>
        <Carousel_react/>
        </Container>

          <div id="about">
              <Jumbotron fluid>
            <Container fluid>
            <h1 className="display-3">About</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </Container>
            </Jumbotron>
          </div>
      </div>
    );
  }
}