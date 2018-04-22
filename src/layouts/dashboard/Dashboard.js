import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import Sidebar from "../../components/Sidebar";

import dashboardRoutes from "./routes.js";

import appStyle from "../../css/dashboardStyles.js";
import logo from "../../img/rec-logo.png";

class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props);
    authData = this.props;
    this.state = {
      mobileOpen: false
    };
    
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  componentDidMount() {
    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }

  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }

  render() {
    const { authData, classes, ...rest } = this.props;
    return(
      <main className="container">
        <div className="pure-g">
          <div className={classes.wrapper}>
            <Sidebar
              routes={dashboardRoutes}
              logoText={"Real Estate Chain"}
              logo={logo}
              handleDrawerToggle={this.handleDrawerToggle}
              open={this.state.mobileOpen}
              color="blue"
              {...rest}
            />
            <div className={classes.mainPanel} ref="mainPanel">
              <div className="pure-u-1-1">
                <h1>Dashboard</h1>
                <p><strong>Congratulations {authData.name}!</strong> If you're seeing this page, you've logged in with your own smart contract successfully.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Dashboard);
