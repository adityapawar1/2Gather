import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import EventList from "../../components/Events/EventList";
import "./home.css";

const Home = () => {

  //user data, still have to add api though
  const [{ user_name, user_tags, jwt_token }, setData] =useContext(UserContext);

  const tags = ["s", "s", "s", "s"]

  return (
    <>
      <div className="greeting-header">
        Welcome {user_name}
      </div>
      <div>
        {tags.map((tag) => {
          <div className="gathering-list">
            <EventList tag={tag}/>
          </div>
        })}
      </div>
    </>
  );  
}

export default Home;
