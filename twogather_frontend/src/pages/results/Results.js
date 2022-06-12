import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../UserContext';
import Event from '../../components/Events/Event';
import "./results.css";
import {
    Container
} from 'react-bootstrap';


const Results = () => {
  //user data, still have to add api though
  const [data, setData] = useContext(UserContext);
  const [showModal, setModal] = useState(true);

  return (
    <>
      <div className="greeting-header m-4">
        Results
      </div>
      <Container>
        <div>
          <Event/>
        </div>
      </Container>
    </>
  )
}

export default Results;
