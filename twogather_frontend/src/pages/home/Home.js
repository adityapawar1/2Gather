import React, {useState, useContext, useEffect} from 'react';
import Modal from '../../'
import {UserContext} from '../../UserContext';
import EventList from '../../components/Events/EventList';
import "./home.css";


const Home = () => {
  //user data, still have to add api though
  const [data, setData] = useContext(UserContext);

  return (
<<<<<<< HEAD
    <div>
      <button onClick={}>

      </button>
    </div>
=======
    <>
      <div className="greeting-header m-4">
        Welcome [user]
      </div>
      <div>
        <div className="gathering-list">
          <EventList/>
        </div>
        <div className="gathering-list">
          <EventList/>
        </div>
        <div className="gathering-list">
          <EventList/>
        </div>
        <div className="gathering-list">
          <EventList/>
        </div>
      </div>
    </>
>>>>>>> c36f23d84798decbdf3e5ab4592b6ccc864e7a75
  )
}

export default Home;
