import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../UserContext';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

import Event from './Event';
import './event.css';

const EventList = (props) => {
    //call api for getting event

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return(
        <div>
            <div className="list-header">
                <div className="tag-title ml-4">Sports</div>
                <div className="slide-bar mr-4">
                    <ArrowBackIosRoundedIcon onClick={slideLeft} width="10" height="30" className="m-0"/>
                    <ArrowForwardIosRoundedIcon onClick={slideRight} width="30" height="30" className="ml-4"/>
                </div>
            </div>
            {/* map data */}
            <div id="slider" className="event-list pl-3">
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
                <div className="event-card">
                    <Event/>
                </div>
            </div>
        </div>
    );

}

export default EventList;