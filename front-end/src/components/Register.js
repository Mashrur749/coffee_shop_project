import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import axios from 'axios'




const Register = () => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [type, setType] = useState("Customer");


    function handleSubmit(e){
        e.preventDefault();
        //send api request
        console.log(username)
        console.log(password)
        console.log(type)
    }

    return (
        <div>
            <h1> Register </h1>
            <br/>
            <Row className="justify-content-md-center">
                <Form onSubmit={handleSubmit}>
                
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Username
                    </Form.Label>
                    <Col sm="6">
                        <Form.Control onChange={(e) => {setUsername(e.target.value)}} placeholder="Username" />
                    </Col>
                    <Col sm="4">
                        <Form.Control onChange={(e) => {setType(e.target.value)}} as="select">
                            <option value="Customer">Customer</option>
                            <option value="Employee">Employee</option>
                        </Form.Control>
                    </Col>
                    </Form.Group>
                
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" />
                    </Col>
                    </Form.Group>
                    <Button type="submit"> Sign Up </Button>
                </Form>
            </Row>
        </div>
    );
}

export default Register;
