import React from "react";
import { Button, Jumbotron } from "reactstrap";
import Loader from "react-loader-spinner";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const LoginForm = props => (
  <div className="title-tag">
    <Jumbotron className="auth-form container">
      <h1 >Login Form</h1>
      <AvForm onValidSubmit={props.submit}>
        <AvField name="username" label="Username" type="name" required />
        <AvField name="password" label="Password" type="password" required />
        <Button color="simon">Submit</Button>
        <h1 className="errors">{props.error}</h1>
        <div hidden={props.loader}>
          <Loader type="Bars" color="#007bff" height={30} width={30} />
        </div>
      </AvForm>
      <div className="d-inline" color="simon">
        <Link to="/signup" color="simon">
          Create Account
        </Link>
      </div>
    </Jumbotron>
  </div>
);

export default LoginForm;
