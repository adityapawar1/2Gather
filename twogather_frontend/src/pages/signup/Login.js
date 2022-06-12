import React, {useState, useEffect, useContext} from 'react';
import {Form, Button} from 'react-bootstrap';
import './form.css'
  
function Login(){

    const [loading, setLoading] = useState(true);

    function handleSubmit(e){

        e.preventDefault();
        const formData = new FormData(e.target)
    
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ':' + pair[1]); 
        }
    
    
        const requestOptions = {
          method: 'POST',
          body: formData,
          redirect: "follow"
        };

        fetch("http://localhost:4000/api/users/signin", requestOptions)
        .then( response => response.text())
        .then( response =>  {

          response = JSON.parse(response)
        //   Cookies.set('user', response.token, {expires: 1});
        //   console.log("cookie: " + Cookies.get('user'))

          setLoading(false);

          if (!response.ok) {
              // get error message from body or default to response status
              const errorResponse = (response && response.message) || response.status;
              return Promise.reject(errorResponse);
          }
        })
        .catch(error => {
         if (error){
            console.log('error', error);
            alert("Check Password and Email");
          }
         });
      }


    return(
        <>
            <Form className="LoginForm" onSubmit={handleSubmit}>
                <h1 className="text-Left m-5">
                    Login
                </h1>
                {/* {loading === true && 
                  <div className="text-center">
                      <Loader/>
                  </div>
                } */}
                <Form.Group className="mb-4 text-left">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-4 text-left" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <div className="text-center mb-4">
                    <Button className="btn-md btn-block"variant="primary" type="submit">
                    Log in
                    </Button>
                </div>
                <Form.Text className="text-muted text-center">
                    Don't have an account? <a href="/signup">Sign up</a>
                </Form.Text>
            </Form>
        </>
    );
}

export default Login