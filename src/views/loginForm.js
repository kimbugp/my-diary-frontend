import React from "react";
import { Button } from "reactstrap";
import Loader from "react-loader-spinner";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const LoginForm = props => (
  <div className="auth-form">
    <h1>Login Form</h1>
    <AvForm onValidSubmit={props.submit}>
      <AvField name="username" label="Username" type="name" required />
      <AvField name="password" label="Password" type="password" required />
      <Button color="primary">Submit</Button>
      <h1 className="errors">{props.error}</h1>
      <div hidden={props.loader}>
        <Loader type="Bars" color="#007bff" height={30} width={30} />
      </div>
    </AvForm>
    <div className="d-inline">
      <Link to="/signup">Create Account</Link>
    </div>
  </div>
);

export default LoginForm;
