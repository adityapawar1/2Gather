import React, { useState } from 'react';
import {Modal,Form, Col, Row} from 'react-bootstrap';
import Tags from '../Tags/Tags.js';
function Modals(props){
    const [show, setShow] = useState(props.show);
    const [title, setTitle] = useState("");
    const [description, setDescrip] = useState("");
    const [tags, setTags] = useState({});
    const [location, SetLoc] = useState("");
    const [date, SetDate] = useState("");
    const [startTime, SetStartTime] = useState("");
    const [endTime, SetEndTime] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function addTag(ntag){
        ntags = tags;
        ntags.push(ntag)
        setTags(ntags);
    }
    function removeTag(i){
        setTags(tags.filter((el, i) => i !== index));
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Body>
                <Form.Label>
                    Event Title
                </Form.Label>
                <Form.Control type="title" placeholder="Title" inputRef={(ref)=>{setTitle(ref);}} />
                <Col>
                    <Row>
                        <Form.Label>
                            Location
                        </Form.Label>
                        <Form.Control type="address" placeholder="Address" inputRef={(ref)=>{setLoc(ref);}} />
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="date" name="dob" placeholder="Date of Birth" inputRef={(ref)=>{SetDate(ref)}}/>
                        </Form.Group>
                        <Form.Label>
                            Start Time
                        </Form.Label>
                        <Form.Control type="time" placeholder="9:00 AM" inputRef={(ref)=>{setStartTime(ref);}}/>
                        <Form.Label>
                            End Time
                        </Form.Label>
                        <Form.Control type="time" placeholder="9:00 PM" inputRef={(ref)=>{setEndTime(ref);}}/>
                    </Row>
                    <Row>
                        <Tags tagger={(ntag)=>{addTag(ntag)}} rtagger={(i)=>{removeTag(i)}}/>
                        <Form.Label>
                            Description
                        </Form.Label>
                        <Form.Control placeholder="Description" inputRef={(ref)=>{setDescrip(ref);}}/>
                    </Row>
                </Col>
            </Modal.Body>
        </Modal>
    )
}