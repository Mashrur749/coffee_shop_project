import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Login = () => {
    return (
        <div>
            <h1> Login </h1>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="4">
                    <Form.Control placeholder="Username" />
                </Col>
                
                </Form.Group>
            
                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="4">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
                </Form.Group>
            </Form>
        </div>
    );
}

export default Login;
