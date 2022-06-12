import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavPFP,
} from './navbarElements.js';
import {CgProfile} from 'react-icons/cg';
import './navbar.css';
import {BsSearch} from 'react-icons/bs';
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavPFP to='/home' activeStyle>
            <img src='logo_75.png'></img>
          </NavPFP>
          <div className="search"><input className="in" placeholder="Find Gatherings..."></input><BsSearch className="icon"></BsSearch></div>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/profile'><CgProfile /></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;