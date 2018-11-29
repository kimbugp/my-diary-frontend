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
import { Authenticate } from "../../routes/protectedRoutes";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  handleClick=()=>{
    localStorage.clear()
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
  const isLoggedIn = Authenticate(localStorage.getItem("token"));
    return (
      <Fragment>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/">My Diary</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse navbar isOpen={this.state.isOpen} >
            <Nav className="ml-auto" navbar hidden={!isLoggedIn}>
              <NavItem >
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/add">Add</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/login" onClick={this.handleClick}>Logout</NavLink>
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
