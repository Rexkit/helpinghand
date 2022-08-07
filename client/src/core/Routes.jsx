import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
const MainPage = lazy(() => import('../containers/MainPage'));
const ProtectedRoute = lazy(() => import('./ProtectedRoute'));
const RequestPage = lazy(() => import('../containers/RequestPage'));
const ProfilePage = lazy(() => import('../containers/ProfilePage'));
const LoginPage = lazy(() => import('../containers/LoginPage'));
const CreateRequestPage = lazy(() => import('../containers/CreateRequestPage'));

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <ProtectedRoute path="/request" component={RequestPage} auth={this.props.isAuthenticated} />
          <ProtectedRoute path="/profile" component={ProfilePage} auth={this.props.isAuthenticated} />
          <ProtectedRoute path="/create" component={CreateRequestPage} auth={this.props.isAuthenticated} />
        </Switch>
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.userId ? true : false
});

export default connect(mapStateToProps)(Routes);