import React, { Fragment } from "react";
import NavBar from "./navBar";
import Footer from "./footer";
import { Card, CardBody } from "reactstrap";

const PageNotFound = () => (
  <Fragment>
    <NavBar />
    <div className="notfound">
      <Card >
        <CardBody>Page Not Found <a href="/">Go Home</a></CardBody>
      </Card>
    </div>
    <Footer />
  </Fragment>
);
export default PageNotFound;
