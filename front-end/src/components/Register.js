import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'




const Register = () => {
    return (
        <div>
            <h1> Register </h1>
            <Form>
            
                <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="2">
                    <Form.Control placeholder="Username" />
                </Col>
                <Col sm="1">
                    <DropdownButton id="dropdown-basic-button" title="Account Type">
                        <Dropdown.Item value="1">Employee</Dropdown.Item>
                        <Dropdown.Item value="2">Customer</Dropdown.Item>
                    </DropdownButton>
                </Col>
                </Form.Group>
            
                <Form.Group as={Row} controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="2">
                    <Form.Control type="password" placeholder="Password" />
                </Col>
                </Form.Group>

            </Form>
        </div>
    );
}

export default Register;
