import React, {useState} from "react";

import { Col, Row, Container } from "react-bootstrap";

function Event(){
  
  const [amount, setAmount] = useState(1);
  const [title, setTitle] = useState(1);


  return (
    <div>
      <div className="event-banner"></div>
      <div className="text-left">
        {/* <div>
          Event Title
        </div>
        <div>
          June 12 8pm to Jun 12 9pm · Central Park, CA
        </div>
        <div>
          5 Participants
        </div> */}
      </div>
    </div>
  );

}

export default Event;
