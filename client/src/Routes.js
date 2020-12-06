import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryView from "./components/CategoryView";

export default function Routes() {

  return (
    <Switch>
      <Route exact path="/categories/:category" component={CategoryView} />
    </Switch>
  );
}