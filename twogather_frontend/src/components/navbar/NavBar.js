import React from "react";
import {
  Navbar,
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import SearchBar from '../searchBar/SearchBar';

import './navbar.css';
import logo from '../../assets/logo_75.png';
import profile from '../../assets/pfp.jpeg';




// git pls
function NavBar() {
  return (
      <Container fluid>
        <Row className="p-3">
          {/* <div className="search-bar">
                <SearchBar/>
              </div> */}
          <Col xs={8} className="text-left">
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
          </Col>
          <Col xs={3}> 
            <Button className="create-gathering-btn">
                Create Gathering
            </Button>
          </Col>
          <Col xs={1}>
            <Navbar.Brand>
              <img
                alt="Logo"
                src={profile}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Col>
        </Row>
      </Container>
  );
}

export default NavBar;
