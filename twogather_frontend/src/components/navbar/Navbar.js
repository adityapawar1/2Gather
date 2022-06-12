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
import './navbar.css';

function NavBar(){
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        React Bootstrap
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;