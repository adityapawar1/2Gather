import React, { useState } from 'react';
import {Modal,Form, Col, Row, Button} from 'react-bootstrap';
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
    const handleClose1 = () =>{
        setShow(false);
    }
    const handleClose2 = () =>{
        let w1 = (title!="" && description!="" && location!=""&& date!="" && startTime!="" && endTime!="");
        if (w1){
            setShow(false);
        }else{
            alert("Missing or Incorrect Information!");
        }
    }
    const handleShow = () => setShow(true);
    function addTag(ntag){
        let ntags = tags;
        ntags.push(ntag)
        setTags(ntags);
    }
    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index));
    }
    return(
        <Modal show={show}>
            <Modal.Body>
                <Col>
                    <Modal.Title>
                        Event Title
                    </Modal.Title>
                    <Form.Control type="title" placeholder="Title" onChange={(ref)=>{setTitle(ref.target.value);}} />
                    <Row>
                        <Col>
                            <Form.Label>
                                Location
                            </Form.Label>
                            <Form.Control type="address" placeholder="Address" onChange={(ref)=>{SetLoc(ref.target.value);}} />
                        </Col>
                        <Col>
                            <Form.Label>
                                Tags
                            </Form.Label>
                            <Tags tagger={(ntag)=>{addTag(ntag)}} rtagger={(i)=>{removeTag(i)}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="dob">
                                <Form.Label>Select Date</Form.Label>
                                <Form.Control type="date" name="dob" placeholder="Date of Birth" onChange={(ref)=>{SetDate(ref.target.value)}}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>
                                Description
                            </Form.Label>
                            <Form.Control placeholder="Description" onChange={(ref)=>{setDescrip(ref.target.value);}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label>
                                Start Time
                            </Form.Label>
                            <Form.Control type="time" placeholder="9:00 AM" onChange={(ref)=>{SetStartTime(ref.target.value);}}/>
                        </Col>
                        <Col>
                            <Form.Label>
                                    End Time
                            </Form.Label>
                            <Form.Control type="time" placeholder="9:00 PM" onChange={(ref)=>{SetEndTime(ref.target.value);}}/>
                        </Col>
                    </Row>
                </Col>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose1}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose2}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Modals;