import React from 'react';
import './EventScroller.css';

let bgColorList = ['03045e', '0077b6', '00b4d8', '90e0ef','ca40f8']
function Event(props) {
  return (
    <>
      
      <a href="#">
          <button className={`EC${props.color}`} id={`event${props.value}`} onClick={props.onClick}>
            <span>
                      
                          <div className="Event_name">{props.title}</div>
                          <div className="Event_time">{props.time}</div>
                          <div className="Event_address">{props.address}</div>
                          <div className="Event_tags">Tags: {props.tags}</div>
                      
                  </span>
          </button>
      </a>   
      </>
      );
}

class EventScroller extends React.Component {
  
  constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this);
      this.state = {
          data: {}
      }
  }

  createEvent = (item, i) => {
      // console.log(item, i);
      
      return <Event value={i} onClick={this.handleClick} title={item.title} time={item.time['start']} address={item.location["address"]} tags={item.tags.join(", ")} color={bgColorList[i % bgColorList.length]} />
  }

  handleClick = (event) => {
      console.log(event.currentTarget.id)
      
  }

  render() {
      return <>
            
          <div className="Overall_Container">
          <div className="bigTitle">
              Recommended Events
            </div>
              {this.state.eventJson.map((item, i) => {return this.createEvent(item, i)})}
            </div>
          </>
  }
}

export default EventScroller;