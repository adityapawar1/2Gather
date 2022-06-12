import React, {useState} from "react";
import Modals from '../../components/Modal/Modal.js';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavPFP,
} from './navbarElements.js';
import {
  Navbar,
  Container,
  Row,
  Col,
  Button,
  Modal,
} from 'react-bootstrap';
import SearchBar from '../searchBar/SearchBar';
import { NavLink as Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo_75.png';
import profile from '../../assets/pfp.jpeg';

// git pls
function NavBar() {
  const [show, setShow] = useState(false);
  return (
    
      <Container fluid>
        
        <Modal show={show}/>
        <Row className="p-3">
          
          <Col xs={2} className="text-left">
          <NavLink to="/home">
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
            </NavLink>
          </Col>
          
          <Col xs={6}>
            <SearchBar/>
          </Col>
          <Col xs={3}> 
            <Button className="create-gathering-btn" onClick={()=>{setShow(true)}}>
                Create Gathering
            </Button>
          </Col>
          <Col xs={1}>
          <NavLink to="/profile">
            <Navbar.Brand>
              <img
                alt="Logo"
                src={profile}
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            </NavLink>
          </Col>
        </Row>
      </Container>
  );
}

export default NavBar;
