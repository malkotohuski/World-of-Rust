import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';


function NavScrollExample() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Redirect to page with the same name
        navigate(`/${searchTerm}`);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand> <Link to="/">Home</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link to="/contacts">Contact us</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about">About us</Link>
                        </Nav.Link>
                        <NavDropdown title="Servers" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <Link to="/serversEU">Top EU servers</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/serversUS">Top US servers</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Welcome" id="navbarScrollingDropdown">
                            <NavDropdown.Item>
                                <Link to="/login">Login</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item> <Link to="/register">Register</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to="/question/1">I am Rich (Game)</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item> <Link to="/contacts">Have problem !</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Posty"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button onClick={handleSearch} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};



export default NavScrollExample;