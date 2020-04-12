import React,{useState} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OtherParts from '../OtherParts';

export default function Login() {

  const [checkAuth,setCheckAuth] = useState(false);
 
  function checkUserAuthentication(user,pass){
    const isAuth = (user==='a@a.com' && pass==='a');
    console.log('isAuth',isAuth);    

    setCheckAuth(isAuth);
  }

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>{
        checkUserAuthentication();
      }}>
        Submit
      </Button>
      {
        checkAuth && <OtherParts />
      }
    </Form>
  );
}
