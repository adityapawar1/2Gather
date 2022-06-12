import { React, useState } from "react";
import TextField from "@mui/material/TextField";
// import List from "./List";
import "./searchbar.css";
import TagsInput from '../tags/TagsInput'
import searchIcon from '../../assets/search_icon.svg';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

function SearchBar() {


  //We can add the list later and just say we didn't find any for the categories that don't exist 
  return (
    <Container fluid>
      <Row className="search-bar">
        <Col xs={1}>
          <img
            alt="search icon"
            src={searchIcon}
            width="15"
            height="15"
          />
        </Col>
        <Col xs={11}>
          <TagsInput/>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
