import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import UserProfile from "../../views/UserProfile";
import {connect} from "react-redux";
import PropTypes from "prop-types";

// reactstrap components

import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Modal
} from "reactstrap";

import {joinStateResetAction} from "./../redux/actions/join/join";
import {statusStateResetAction} from "./../redux/actions/status/status";
import {payStateResetAction} from "./../redux/actions/pay/pay";
import {saleBuyStateResetAction} from "./../redux/actions/sale_buy/sale_buy";
import {logoutAction} from "./../redux/actions/accounts/login";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: "navbar-transparent"
    };
  }

  static propType={
        joinStateResetAction: PropTypes.func,
        statusStateResetAction: PropTypes.func,
        payStateResetAction: PropTypes.func,
        saleBuyStateResetAction: PropTypes.func
    };
    logoutHandler=()=>{
        const {payStateResetAction, joinStateResetAction, statusStateResetAction, saleBuyStateResetAction} = this.props;
        payStateResetAction();
        joinStateResetAction();
        statusStateResetAction();
        saleBuyStateResetAction();
        this.props.logoutAction();

    };

  componentDidMount() {
    window.addEventListener("resize", this.updateColor);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateColor);
  }
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: "bg-white"
      });
    } else {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: "navbar-transparent"
      });
    } else {
      this.setState({
        color: "bg-black"
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch
    });
  };
  render() {
    return <>
      <Navbar
          className={classNames("navbar-absolute", this.state.color)}
          expand="lg"
      >
        <Container fluid>
          <div className="navbar-wrapper">
            <div
                className={classNames("navbar-toggle d-inline", {
                  toggled: this.props.sidebarOpened
                })}
            >
              <button
                  className="navbar-toggler"
                  type="button"
                  onClick={this.props.toggleSidebar}
              >
                <span className="navbar-toggler-bar bar1"/>
                <span className="navbar-toggler-bar bar2"/>
                <span className="navbar-toggler-bar bar3"/>
              </button>
            </div>
            <NavbarBrand href="/#/ዘ-EQUB/dashboard">
              ዘ-Equb
            </NavbarBrand>
          </div>
          <button
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navigation"
              data-toggle="collapse"
              id="navigation"
              type="button"
              onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-bar icon-bar"/>
            <span className="navbar-toggler-bar icon-bar"/>
            <span className="navbar-toggler-bar icon-bar"/>
          </button>
          <Collapse navbar isOpen={this.state.collapseOpen}>
            <Nav className="ml-auto" navbar>

              <InputGroup className="search-bar">
                <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                >
                  <i className="tim-icons icon-zoom-split"/>
                  <span className="d-lg-none d-md-block">Search</span>
                </Button>
              </InputGroup>



              <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                >
                  <div className="notification d-none d-lg-block d-xl-block"/>
                  <i className="tim-icons icon-bell-55"/>
                  <p className="d-lg-none">Notifications</p>
                </DropdownToggle>

              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                >
                  <div className="photo">
                    <img alt="..." src={require("assets/img/Rob.JPG")}/>
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block"/>
                  <p className="d-lg-none">Log out</p>
                </DropdownToggle>
                <DropdownMenu className="dropdown-navbar" right tag="ul">
                  <NavLink  href="/#/ዘ-EQUB/admin/user-profile" >
                    <DropdownItem className="nav-item">
                      Profile
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">Settings</DropdownItem>
                  </NavLink>
                  <DropdownItem divider tag="li"/>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item" onClick={this.logoutHandler}>Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className="separator d-lg-none"/>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
      >
        <div className="modal-header">
          <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text"/>
          <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalSearch}
          >
            <i className="tim-icons icon-simple-remove"/>
          </button>
        </div>
      </Modal>
    </>;
  }
}

const mapStateToProps=state=>({
   isAuthenticated:state.login.isAuthenticated,
    login:state.login
});

export default  connect(mapStateToProps,{logoutAction, joinStateResetAction, payStateResetAction, statusStateResetAction, saleBuyStateResetAction})(AdminNavbar);
