import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="nav-bg">
            <Navbar>
                <Container className="nav-bg">
                    <Navbar.Brand as={Link} to="/"><img src="/logo.png" alt="" width="50px" />    <span className="text-light fw-bolder">Travel With Fun</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="text-light route-name p-3" to="/home">Home</Link>
                            <Link className="text-light route-name p-3" to="/services">Services</Link>
                            <Link className="text-light route-name p-3" to="/about">About</Link>
                            <Link className="text-light route-name p-3" to="/review">Review</Link>
                            <Link className="text-light route-name p-3" to="/dashboard">DashBoard</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;