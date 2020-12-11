import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import MainPage from '../containers/MainPage';
import ProtectedRoute from './ProtectedRoute';
import RequestPage from '../containers/RequestPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <ProtectedRoute path="/request/:id" component={RequestPage} auth={this.props.isAuthenticated} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.userId ? true : false
});

export default connect(mapStateToProps)(Routes);