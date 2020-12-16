import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useHistory } from "react-router-dom";



const NavBar = () => {
    
    const history = useHistory();

    function logout(){
        localStorage.removeItem("userInfo");
        history.push("/login")

    }

    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        My Coffee Shop
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav inline="true">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link onClick={logout}>Logout</Nav.Link>
                    </Nav>
                </Navbar>
            </>
        </div>
    );
}

export default NavBar;
