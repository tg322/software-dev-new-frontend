import * as React from 'react';
import { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { UserContext } from './ContextProvider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import logo from './images/software-dev-logo.svg'
import loginBG from './images/Forest.webp'

function Login() {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate();

    // Correctly destructure from context
    const context = useContext(UserContext);

    if (!context) {
        return <div>Loading...</div>; // Or handle the error appropriately
    }

    const { authorisedUser, addAuthorisedUser } = context;

    async function loginOnClick(){
        try {
            let response = await axios.post('http://localhost:5000/api/auth/login', {
              email: email,
              password: password
            });
            if(response.data){
                addAuthorisedUser(response.data.data);
            //   localStorage.setItem("token", response.data.data.token);
            //   navigate("/");
            console.log(response.data.data);
            navigate('/');
            }
            
        
          } catch (error) {
            //build error response interface
            //print error if error.response.data exists else print error
            console.log(error);
          }
    }

    return (
        <div style={{display:'flex', width:'100%', height:'100vh', justifyContent:'center', alignItems:'center', backgroundImage:`${loginBG}`, backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
            <div style={{display:'flex', flexDirection:'column', width:'400px', height:'fit-content', gap:'20px', alignItems:'center', backgroundColor:'#E5E6E4', padding:'20px', borderRadius:'10px'}}>

                <img style={{width:'150px'}} src={logo}/>

                <Form.Label htmlFor="inputEmail5" style={{fontWeight:'600'}}>Email</Form.Label>
                <Form.Control
                    type="email"
                    id="inputEmail5"
                    aria-describedby="emailHelpBlock"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Form.Label htmlFor="inputPassword5" style={{fontWeight:'600'}}>Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Col className='g-5 d-flex' style={{justifyContent:'right', gap:'25px'}}>
                    <Button variant="secondary" onClick={loginOnClick}>Sign up</Button>
                    <Button variant="primary" onClick={loginOnClick}>Login</Button>
                </Col>
                
                
            </div>
        </div>
    );
}

export default Login;