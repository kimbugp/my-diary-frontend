import React, { Component, Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  NavItem,
  NavLink,
  NavbarToggler,
  Nav
} from "reactstrap";
import { connect } from "react-redux";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">My Diary</NavbarBrand>
          <NavbarToggler id="toggler" />
          <UncontrolledCollapse navbar toggler="#toggler" >
            <Nav className="ml-auto" navbar hidden={!this.props.isLoggedIn}>
              <NavItem >
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/profile" >Profile</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Navbar>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(
  mapStateToProps,
  {}
)(NavigationBar);
