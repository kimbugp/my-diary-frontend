import React from "react";
import { Button, Jumbotron } from "reactstrap";
import {LoadingBar} from "../components/common/footer";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const LoginForm = props => (
  <div className="title-tag">
    <Jumbotron className="auth-form">
      <h1 >Login Form</h1>
      <AvForm onValidSubmit={props.submit}>
        <AvField name="username" label="Username" type="name" required />
        <AvField name="password" label="Password" type="password" required />
        <Button color="simon">Submit</Button>
        <h1 className="errors">{props.error}</h1>
        <LoadingBar loader={props.loader}/>
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
