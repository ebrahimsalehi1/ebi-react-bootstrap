import React,{useState} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OtherParts from '../OtherParts';

export default function Login() {

  const [checkAuth,setCheckAuth] = useState(false);
  const [user,setUser] = useState('');
  const [pass,setPass] = useState('');  

  function handlerChangeUser(e){
    const val = e.target.value;
    console.log('handlerChangeUser',val);
    
    setUser(val);
  }

  function handlerChangePass(e){
    const val = e.target.value;

    console.log('handlerChangePass',val);

    setPass(val);
  }

  const userInfo = {
    user: 'a@a.com',
    pass:'a'
  };

  function checkUserAuthentication(){
    const isAuth = (user===userInfo.user && pass===userInfo.pass);
    console.log('isAuth',isAuth,userInfo,user,pass);    

    setCheckAuth(isAuth);
  }

  return (
    <Form>
     { !checkAuth && <>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" defaultValue={user} onChange={handlerChangeUser}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" defaultValue={pass} onChange={handlerChangePass} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"  onClick={()=>{
        checkUserAuthentication();
      }}>
        Submit
      </Button>
      </>
      }
      {
        checkAuth && <OtherParts />
      }

    </Form>
  );
  
}
