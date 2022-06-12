import React, {useState, useContext, useEffect} from 'react';
import Modal from '../../'
import {UserContext} from '../../UserContext';
import EventList from '../../components/Events/EventList';
import Modals from '/Users/roshanb/Documents/GitHub/2Gather/twogather_frontend/src/components/Modal/Modal.js';
import "./home.css";


const Home = () => {
  //user data, still have to add api though
  const [data, setData] = useContext(UserContext);
  const [showModal, setModal] = useState(true);
  function makeEvent(){
    setModal(true);
  }
  return (
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
        <Modals show={true}/>
      </div>
    </>
  );
}

export default Home;
