import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'





const Login = () => {


    function handleSubmit(e){
        e.preventDefault();
        //send api request
    }

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div>
            <h1> Login </h1>
            <br/>
            <Row className="justify-content-md-center">
                <Form onSubmit={handleSubmit}>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Username
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" />
                    </Col>
                    
                    </Form.Group>
                
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Password" />
                    </Col>
                    </Form.Group>
                    <Button type="submit"> Sign In </Button>
                </Form>
            </Row>
        </div>
    );
}

export default Login;
