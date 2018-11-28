import React from "react";
import { Button, Jumbotron } from "reactstrap";
import Loader from "react-loader-spinner";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Link } from "react-router-dom";

const SignupForm = props => (
  <div className="title-tag">
    <Jumbotron className="auth-form">
      <h1 className="title-tag">Register </h1>
      <AvForm onValidSubmit={props.submit}>
        <AvField
          name="username"
          label="Username"
          type="name"
          required
          errorMessage="Enter a valid username"
        />
        <AvField
          name="name"
          label="Full Name"
          type="text"
          errorMessage="Invalid name"
        />
        <AvField
          name="email"
          label="Email"
          type="email"
          required
          errorMessage="Invalid email format"
        />
        <AvField
          name="password"
          label="Password"
          type="password"
          required
          errorMessage="Enter password"
          validate={{
            pattern: {
              value: "(?=.*[A-Z])(?=.*[a-z]).{8,}",
              errorMessage:
                "Must be minimum 8 characters including uppercase and lower case"
            }
          }}
        />
        <AvField
          name="confirm-password"
          label="Confirm Password"
          type="password"
          validate={{ match: { value: "password" } }}
          errorMessage="Password not matching"
        />
        <Button color="simon">Submit</Button>
        <h1 className="errors">{props.error}</h1>
        <div hidden={props.loader}>
          <Loader type="Bars" color="#007bff" height={30} width={30} />
        </div>
      </AvForm>
      <div className="d-inline">
        <Link to="/login">Already have account ? Login Here </Link>
      </div>
    </Jumbotron>
  </div>
);

export default SignupForm;
