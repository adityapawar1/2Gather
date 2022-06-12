import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../UserContext';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import Event from './Event';
import './event.css';

const EventList = (props) => {
    //call api for getting event

    const moveBack = () => {};
    const moveForward = () => {};

    return(
        <div>
            <ArrowBackIosNewIcon onClick={moveBack}/>
            <div>Sports</div>
            {/* map data */}
            <div>
                <div className="event-card">
                    <Event/>
                </div>
                <div className="event-card">
                    <Event/>
                </div>
                <div className="event-card">
                    <Event/>
                </div>
                <div className="event-card">
                    <Event/>
                </div>
            </div>
            <ArrowForwardIosIcon onClick={moveForward}/>
        </div>
    );

}

export default EventList;