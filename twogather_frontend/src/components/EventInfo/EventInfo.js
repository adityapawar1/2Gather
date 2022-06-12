import React from 'react';
import './EventInfo.css';
import Home from '../eventMap/EventMap';
import EventInfoTabs from '../eventInfoTabs/EventInfoTabs';
import Tags from '../UneditableTags/Tags';
import events from './events.json';

class EventInfo extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            eventJson: events.events,
            event_id: 4,
            text: "Register"
        }
        
    }

    handleClick = (event) => {
       event.target.style.backgroundColor = "#3fd963";
    }
    changeText = (text) => {

        this.setState({ text }); 
      } 
    
    
    render() {
        const {text} = this.state
        return (
            <div>
                <div id="top">
                    <div id="name">{this.state.eventJson[this.state.event_id].title}</div>
                    <div id="host">Organized by: {this.state.eventJson[this.state.event_id].organizer}</div>
                    <button onClick={ (event) => {this.changeText("Registered!"); this.handleClick(event);} } className="button" id="register">{text}</button>
                </div>
                <div id="map" className="map">
                 <Home/>
                
                </div>
                <div id = "bottom">
                    
                    <div className="tabs">
                    <EventInfoTabs />
                        
                    </div>
                    <div className="tags">
                        <div className="tagName">Tags</div>
                        <Tags />
                    </div>
                    <div className="desc">
                        <div className="descName">Description</div>
                       <p className="descInfo">
                       {this.state.eventJson[this.state.event_id].description}
                       
                       </p>
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default EventInfo;