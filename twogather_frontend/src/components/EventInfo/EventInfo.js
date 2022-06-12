import React from 'react';
import './EventInfo.css';
import Home from '../eventMap/EventMap';


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
                    <div class="row">
                            <div class="column">a</div>
                            <div class="column">b</div>
                            <div class="column">c</div>
                            <div class="column">d</div>
                    </div>
                    </div>
                  
                </div>
            </div>
        );
    }
}

export default EventInfo;