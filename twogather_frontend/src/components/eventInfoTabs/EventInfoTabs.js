import React from 'react'
import './EventInfoTabs.css'
import { Container, Row, Col } from 'react-bootstrap';
const EventInfoTabs = () => {
  return (
    <div>
        <Container>
             <Row>
                <Col className="column"> <div id="title">
                    Start Time
                </div>    
                <div id="info">
                    <br></br>
                    05 June 2021 5PM
                </div></Col>
                <Col className="column"><div id="title">
                    End Time
                </div>    
                <div id="info">
                    <br></br>
                    05 June 2021 6PM
                </div></Col>
                <Col className="column"><div id="title">
                    Number of Attendees
                </div>    
                <div id="info">
                    <br></br>
                    6 People
                </div></Col>
                <Col>
                    <button id="open_chat">
                Open Chat
            </button></Col>
            </Row>
        </Container>
        
    </div>
  )
}

export default EventInfoTabs;