import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NavBar = () => {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        My Coffee Shop
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav inline>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        </div>
    );
}

export default NavBar;
