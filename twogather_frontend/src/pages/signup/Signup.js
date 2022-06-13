import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./form.css";
import Tags from "../../components/tags/Tags";

function SignUp() {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("tags", ["basketball", "robotics", "soccer"]);

    for (var pair of formData.entries()) {
      console.log(pair[0] + ":" + pair[1]);
    }

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };
    fetch("http://localhost:4000/api/user/signup", requestOptions)
      .then(async (response) => response.text())
      .then((response) => {
        setMessage(response);
        setLoading(false);

        if (!response.ok) {
          // get error message from body or default to response status
          const errorResponse =
            (response && response.message) || response.status;
          return Promise.reject(errorResponse);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    console.log(message);
    // console.log('error: ', error);
    // console.log(message);
  }, [message]);

  return (
    <>
      <Container className="SignUpContainer" fluid>
        <Form className="SignUpForm" onSubmit={handleSubmit}>
          <h1 className="text-center m-5">Sign Up</h1>
          <Row>
            <Col md>
              <Form.Group className="m-2">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  name="phone"
                  type="text"
                  placeholder="1 (555) 555 5555 "
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Group className="m-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="m-2">
            <Form.Label>Tags</Form.Label>
            <Tags />
          </Form.Group>
          <div className="text-center">
            <Button
              className="btn-md btn-block mt-4 mb-4 bg-blue"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
          <div className="text-muted tosText">
            By continuing to create an account, you agree to 2Gather's{" "}
            <a href="#">Terms of Service</a>.
          </div>
          <hr size="2" className="separateLine" />
          <Form.Text className="text-center">
            Already have an account? <a href="/login">Login</a>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
}

export default SignUp;
