import React, { Fragment } from "react";
import { CardFooter } from "reactstrap";
import Loader from "react-loader-spinner";

const Footer = () => (
  <Fragment>
    <div className="m-5" />
    <CardFooter className="footer" color="primary">
      <p>Simon, Copyright © 2018</p>
    </CardFooter>
  </Fragment>
);
export default Footer;

export const LoadingBar = props => (
  <Fragment>
  <h1 className="errors">{props.error}</h1>
  <div hidden={props.loader}>
    <Loader type="Bars" color="#007bff" height={30} width={30} />
  </div>
  </Fragment>
);
