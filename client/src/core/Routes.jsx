import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from '../containers/MainPage';
import RequestPage from '../containers/RequestPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/request/:id" component={RequestPage} />
    </Switch>
  );
}