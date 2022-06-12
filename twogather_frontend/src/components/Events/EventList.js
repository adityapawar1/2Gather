import React, {useState, useContext, useEffect} from 'react';
import {UserContext} from '../../UserContext';

import Event from './Event';

const EventList = (props) => {


    //call api for getting event

    return(
        <div>
            <div></div>
            <div>
                <Event/>
                <Event/>
                <Event/>
                <Event/>
            </div>
        </div>
    );

}

export default EventList;