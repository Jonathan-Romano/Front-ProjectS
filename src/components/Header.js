import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <React.Fragment>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Sneakers</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/">
              Inicio
            </Nav.Link>
            <Nav.Link href="/products">
              Productos
            </Nav.Link>
            <Nav.Link href="/help">
              Ayuda
            </Nav.Link>
            <NavDropdown title="Usuario" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">
                Iniciar sesion
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">
                Registrarse
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </React.Fragment>



  );
}

export default Header;