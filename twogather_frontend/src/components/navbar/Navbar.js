import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
import SearchBar from '../searchBar/SearchBar';

import './navbar.css';
import logo from '../../assets/logo_75.png';

function NavBar(){
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img
            alt="Logo"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          2Gather
        </Navbar.Brand>
        <SearchBar/>
      </Container>
    </Navbar>
  );
}

export default NavBar;