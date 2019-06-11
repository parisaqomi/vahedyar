import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// core components
import RTL from "layouts/RTL.jsx";
import Login from "layouts/Login.jsx";

import "assets/css/material-dashboard-react.css?v=1.6.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/rtl" component={RTL} />
      <Route path="/" component={Login} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
