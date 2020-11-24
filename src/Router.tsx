import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import PushMessage from "./pages/PushMessage";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={PushMessage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
