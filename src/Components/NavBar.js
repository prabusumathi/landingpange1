import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

import logo from './img/logo.png'

const NavBar = () => {
  return (
    <div>
       
    
    <Navbar expand="lg" className="bg-body-tertiary">
  <Container fluid>
  <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
       <img src={logo} />
      </Navbar.Brand>
    </Container>
  </Navbar>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav 
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      
       
        <NavDropdown title="HOME" id="navbarScrollingDropdown" >

  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  </NavDropdown>
        
  <NavDropdown title="SHOP" id="navbarScrollingDropdown">
 
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  </NavDropdown>

  <NavDropdown title="PAGES" id="navbarScrollingDropdown">
 
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  </NavDropdown>

  <NavDropdown title="BLOG" id="navbarScrollingDropdown">
 
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  </NavDropdown>

  <NavDropdown title="CONTACT US" id="navbarScrollingDropdown">
 
  <Dropdown.Item as="button">Action</Dropdown.Item>
  <Dropdown.Item as="button">Another action</Dropdown.Item>
  <Dropdown.Item as="button">Something else</Dropdown.Item>
  </NavDropdown>

      </Nav>
      <Form className="d-flex ">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" className=''>Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar
