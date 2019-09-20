import React from "react";
import {
  // HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  NavLink,
  Redirect,
  Switch
} from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutAction } from "../Login/action";
import IndexPage from "./IndexPage";

import Router from "../../utils/router";

import { LocaleProvider } from "antd";

import Loadable from "react-loadable";

import "./style";

const Main = ({ match, history, logoutAction }) => {
  return (
    <Router>
      <React.Fragment>
        {/* header */}
        <IndexPage />
      </React.Fragment>
    </Router>
  );
};

const mapStateToProps = state => ({
  token: state.loginReducer.token
});

const mapDispatchToProps = dispatch => ({
  logoutAction: bindActionCreators(logoutAction, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
