import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Login = () => {
    return (
        <div>
            <h1> Login </h1>
            <br/>
            <Row className="justify-content-md-center">
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="4">
                        Username
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control placeholder="Username" />
                    </Col>
                    
                    </Form.Group>
                
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="4">
                        Password
                    </Form.Label>
                    <Col sm="8">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>
                </Form>
            </Row>
        </div>
    );
}

export default Login;
