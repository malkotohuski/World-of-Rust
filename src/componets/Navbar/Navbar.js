import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Новите Съседи </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                        <Nav.Link href="#action2">За нас !</Nav.Link>
                        <NavDropdown title="Добре дошли!" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Вход</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Регистрация
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Имам проблем!
                            </NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link> */}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Амадор"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Търси</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;