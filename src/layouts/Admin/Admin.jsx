import React from "react";
import { Route, Switch } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
import PrivateRoute from '../../components/common/PrivateRoute';
// import "assets/scss/black-dashboard-react.scss";
//  import "assets/demo/demo.css";
//  import "assets/css/nucleo-icons.css";

// core components
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCurrentDateTime} from "../../components/redux/actions/accounts/login";
// import UserNavbar from "../../components/Navbars/userNavbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import FixedPlugin from "../../components/FixedPlugin/FixedPlugin.jsx";
import {Redirect} from "react-router-dom";

 import routes from "../../adminroute";
// import routes from "../../routes";
import AdminNavbar from "../../components/Navbars/adminNavbar";


var ps;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "blue",
      sidebarOpened:
          document.documentElement.className.indexOf("nav-open") !== -1
    };

  }
   static propType={
        login:PropTypes.array.isRequired,
        getCurrentDateTime: PropTypes.func
    };

  componentDidMount() {
    if(this.props.login.current_date === false)
            this.props.getCurrentDateTime()
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/ዘ-EQUB/admin") {
        return (
          <PrivateRoute
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <Sidebar
            {...this.props}
            routes={routes}
            bgColor={this.state.backgroundColor}
            toggleSidebar={this.toggleSidebar}
          />
          <div
            className="main-panel"
            ref="mainPanel"
            data={this.state.backgroundColor}
          >
            <AdminNavbar
              {...this.props}
              brandText={this.getBrandText(this.props.location.pathname)}
              toggleSidebar={this.toggleSidebar}
              sidebarOpened={this.state.sidebarOpened}
            />
            <Switch>{this.getRoutes(routes)}</Switch>
            {// we don't want the Footer to be rendered on map page
            this.props.location.pathname.indexOf("maps") !== -1 ? null : (
              <Footer fluid />
            )}
          </div>
        </div>
        <FixedPlugin
          bgColor={this.state.backgroundColor}
          handleBgClick={this.handleBgClick}
        />
      </>
    );
  }
}
const mapStateToProps=state=>({
   login:state.login
});

export default connect(mapStateToProps, {getCurrentDateTime})(Admin);
