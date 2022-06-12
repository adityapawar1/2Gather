import React, { useState } from 'react';
import {Modal,Form, Col, Row, Button} from 'react-bootstrap';
import "./Modal.css";
import Tags from '../tags/Tags.js';
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
            var obj = new Object();
            obj.title=title;
            obj.description=description;
            obj.location={"lat":null,"long":null,"address":location};
            obj.time={"start":date+" "+startTime,"end":date+" "+endTime};
            var jsonString= JSON.stringify(obj);
            var myHeaders = new Headers();
            myHeaders.append("jwttoken", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTQ5OTYwMzEsImlhdCI6MTY1NDk4ODgzMSwiaWQiOjMzLCJpc3MiOiIyZ2F0aGVyLWF1dGgiLCJqdGkiOiIycnJyNzRtajlza2pldjloZzAwMDAwOTMiLCJuYmYiOjE2NTQ5ODg4MzF9.LZvw8tPVI-fSCkBg4s0Zd6QJsVWDbVwwWoytmlQtq8");
            var raw = jsonString;
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("http://localhost:4000/api/event", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
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
        <Modal show={props.show}>
            <Modal.Body>
                <Col>
                    <Modal.Title>
                        Event Title
                    </Modal.Title>
                    <Form.Control type="title" placeholder="Title" onChange={(ref)=>{setTitle(ref.target.value);}} />
                    <Row id="r1">
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
                    <Row id="r2">
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
                    <Row id="r3">
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
                <Button variant="primary" id="button1" onClick={handleClose2}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Modals;