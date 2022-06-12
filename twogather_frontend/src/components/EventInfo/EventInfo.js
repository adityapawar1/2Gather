import React from 'react';
import './EventInfo.css';
import Home from '../eventMap/EventMap';
import EventInfoTabs from '../eventInfoTabs/EventInfoTabs';
import Tags from '../UneditableTags/Tags';

class EventInfo extends React.Component {
    constructor(props) {
        super(props);
    
    }
    
    render() {
        
        return (
            <div>
                <div id="top">
                    <div id="name">Bowling with Vivek</div>
                    <div id="host">Created by vivek.nadig@warriorlife.net</div>
                    <button className="button" id="register">Register</button>
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
                       Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but al
                       </p>
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default EventInfo;