import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.scss';
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loginOrOut(){
    if(this.props.isLoggedIn){
      return(<NavLink href="/login">Log Out</NavLink>)
    }
return(<NavLink href="/login">Log In</NavLink>)
  }

  render() {
    return <Navbar expand="md">
      <NavbarBrand tag={Link} to="/">Rewy</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/movies">Movies</NavLink>
          </NavItem>
          <NavItem>
            {this.loginOrOut()}
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;
  }
}