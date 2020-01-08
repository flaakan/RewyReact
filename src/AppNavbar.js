import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.scss';
export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      loggedInUser: [],
      loggedInStatus: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    const user = localStorage.getItem('loggedInUser');
    const status = localStorage.getItem('loggInStatus');
    this.setState({ loggedInUser: JSON.parse(user), loggedInStatus: JSON.parse(status) });
  }


  onLogout(){
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('loggInStatus');
  }


  loginOrOut() {
    if (this.state.loggedInStatus) {
      return (<>
   <NavItem><NavLink href="" >{this.state.loggedInUser.username}</NavLink></NavItem> 
   <NavItem> <NavLink href="/login" onClick={this.onLogout}>Log Out</NavLink></NavItem> 
      </>)
      
    }
    return (<NavLink href="/login">Log In</NavLink>)
  }

  render() {
    return <Navbar expand="md">
      <NavbarBrand tag={Link} to="/">Rewy</NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/movies">Movies</NavLink>
          </NavItem>
            {this.loginOrOut()}

        </Nav>
      </Collapse>
    </Navbar>;
  }
}