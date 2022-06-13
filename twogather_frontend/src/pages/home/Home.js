import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import EventList from "../../components/Events/EventList";
import "./home.css";
import NavBar from '../../components/navbar/NavBar';

const Home = () => {

  //user data, still have to add api though
  const [{ user_name, user_tags, jwt_token }, setData] =useContext(UserContext);

  const tags = ["soccer", "hackathon"]

  return (
    <>    
      <NavBar/>
      <div className="greeting-header">
        Welcome Vivek Nadig
      </div>
      <div>
        {tags.map((tag) => {
          return(
            <div className="gathering-list">
              <EventList tag={tag}/>
            </div>
        )})}
      </div>
    </>
  );  
}

export default Home;
