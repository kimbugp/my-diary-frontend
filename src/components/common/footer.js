import React, { Fragment } from "react";
import { CardFooter } from "reactstrap";

const Footer = () => (
  <Fragment>
    <div className="space"></div>
    <CardFooter className="footer" color="secondary">
      <p>Simon, Copyright © 2018</p>
    </CardFooter>
  </Fragment>
);
export default Footer;
