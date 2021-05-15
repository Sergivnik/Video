import React from "react";
import { Switch, Route } from "react-router-dom";
import { App } from "../app.jsx";
import { ChooseVideo } from "./ChooseVideo/ChooseVideo.jsx";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/something" render={() => <ChooseVideo />}></Route>
    </Switch>
  );
};
