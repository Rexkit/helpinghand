import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import MainPage from '../containers/MainPage';
import ProtectedRoute from './ProtectedRoute';
import RequestPage from '../containers/RequestPage';
import ProfilePage from '../containers/ProfilePage';
import LoginPage from '../containers/LoginPage';
import CreateRequestPage from '../containers/CreateRequestPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/request" component={RequestPage} auth={this.props.isAuthenticated} />
        <ProtectedRoute path="/profile" component={ProfilePage} auth={this.props.isAuthenticated} />
        <ProtectedRoute path="/create" component={CreateRequestPage} auth={this.props.isAuthenticated} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.userId ? true : false
});

export default connect(mapStateToProps)(Routes);