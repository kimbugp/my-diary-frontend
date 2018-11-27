import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components";
import Login from "../components/auth/loginComponent";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter >
        <Switch>
          <Route path="/" component={Home} exact strict />
          <Route path="/login" component={Login} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
