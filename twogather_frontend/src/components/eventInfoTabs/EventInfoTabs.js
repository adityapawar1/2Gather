import React from 'react'
import './EventInfoTabs.css'

const EventInfoTabs = () => {
  return (
    <div>
        <div id = "row" className="row">
            <div className="column">
                <div id="title">
                    Start Time
                </div>    
                <div id="info">
                    <br></br>
                    05 June 2021 5PM
                </div>
            </div>
            <div className="column">

            <div id="title">
                    End Time
                </div>    
                <div id="info">
                    <br></br>
                    05 June 2021 6PM
                </div>
            </div>
            <div className="column">
            <div id="title">
                    Number of Attendees
                </div>    
                <div id="info">
                    <br></br>
                    6 People
                </div>
            </div>
            <button className="column" id="open_chat">
                Open Chat
            </button>
        </div>
    </div>
  )
}

export default EventInfoTabs;