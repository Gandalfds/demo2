import React, { Component } from "react";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Router from "../utils/router";

import Loadable from "react-loadable";

import { connect } from "react-redux";

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ "./Login"),
  loading: () => <div>Loading...</div>
});

const Main = Loadable({
  loader: () => import(/* webpackChunkName: "Main" */ "./Main"),
  loading: () => <div>Loading...</div>
});


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Main} {...this.props} />
          {/* <Route component={NoMatch} /> */}
          {/* <Redirect to={{ pathname: "/" }} /> */}
        </Switch>
      </Router>
    );
  }
}

class PrivateRoute extends Component {
  render() {
    const { component: Component, token, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  token: state.loginReducer.token
});

export default connect(
  mapStateToProps
)(App);
