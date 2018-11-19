import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter >
        <Switch>
          <Route path="/" component={Home} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
