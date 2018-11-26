import React from "react";
import { Button } from "reactstrap";

import { AvForm, AvField } from "availity-reactstrap-validation";

const LoginForm = props => (
  <div className="auth-form">
    <h1>Login Form</h1>
    <AvForm onValidSubmit={props.submit}>
      <AvField name="username" label="Username" type="name" required />
      <AvField name="password" label="Password" type="password" required />
      <Button color="primary">Submit</Button>
    </AvForm>
  </div>
);

export default LoginForm;
