import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../UserContext';

const Home = () => {
  //user data, still have to add api though
  const [data, setData] = useContext(UserContext);

  return (
    <div>
      <button>

      </button>
    </div>
  )
}

export default Home;
