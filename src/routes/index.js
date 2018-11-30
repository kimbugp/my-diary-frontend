import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/homepage";
import Login from "../components/auth/loginComponent";
import ProtectedRoute from "./protectedRoutes";
import SignUp from "../components/auth/signUpComponent";
import PageNotFound from "../components/common/404.js";
import NewEntry from "../components/homepage/newEntry";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter >
        <Switch>
          <ProtectedRoute path="/" component={Home} exact strict />
          <Route path="/login" component={Login} exact strict />
          <Route path="/signup" component={SignUp} exact strict />
          <ProtectedRoute path="/add" component={NewEntry} exact strict />
          <ProtectedRoute path="/edit/:id" component={NewEntry} exact strict />
          <Route  component={PageNotFound} exact strict />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
