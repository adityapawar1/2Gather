import React from 'react'
import './EventInfoTabs.css'
import { Container, Row, Col } from 'react-bootstrap';
import events from './events.json';

class EventInfoTabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            eventJson: events.events,
            event_id: 4
        }
    }
    render() {
  return (
    <div>
        <Container>
             <Row>
                <Col className="column"> <div id="title">
                    Start Time
                </div>    
                <div id="info">
                    <br></br>
                    {this.state.eventJson[this.state.event_id].time['start']}
                    {/* {$.getJSON(locationstring, function (result) { 
                        console.log(eventJson[0].time['start'])} */}
                </div></Col>
                <Col className="column"><div id="title">
                    End Time
                </div>    
                <div id="info">
                    <br></br>
                    {this.state.eventJson[this.state.event_id].time['end']}
                </div></Col>
                <Col className="column"><div id="title">
                    Number of Attendees
                    
                </div>    
                <div id="info">
                    <br></br>
                    
                    {this.state.eventJson[this.state.event_id].participants.length} People
                </div></Col>
                {/* <Col className="hiddenColumn">    </Col> */}
                <Col>
                    <button id="open_chat">
                Open Chat
            </button></Col>
            </Row>
        </Container>
        
    </div>
  )
  }
}

export default EventInfoTabs;