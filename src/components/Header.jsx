import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css"
import { Link } from 'react-router-dom';

function Header(props) {

  console.log(props);

  return (
    <div id="header-color">

      <Navbar expand="lg" className="bg-body-tertiary header-bg">
        <Container>
          <Navbar.Brand as = {Link} to="/">Shopercart</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as ={Link} to="/services">Services</Nav.Link>
              <Nav.Link as = {Link} to="/Products">products</Nav.Link>
              <Nav.Link as = {Link} to="/contacts">Contacts</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as = {Link} to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as = {Link} to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as = {Link} to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as = {Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="ms-auto">
            <Nav.Link as = {Link} to="/cart" className='position-relative' >
            <span className='cart'>
             {props.cartCount}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
</Nav.Link>
              <Nav.Link as = {Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Header