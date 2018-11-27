import React, { Component, Fragment } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  NavLink,
  NavbarToggler,
  Nav
} from "reactstrap";
import { connect } from "react-redux";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <Fragment>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">My Diary</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse navbar isOpen={this.state.isOpen} >
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
          </Collapse>
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
