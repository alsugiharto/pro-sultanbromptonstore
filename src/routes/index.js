import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./Landing";
import Productdetails from "./Productdetails";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="" component={Landing} />
      <Route path="/productdetails" component={Productdetails} />
    </Switch>
  </BrowserRouter>
);
