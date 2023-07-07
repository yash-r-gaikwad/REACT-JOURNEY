import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


export const TopHeader = () => {
  return (
 <header>
         <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container >
        <Link className='nav-link'  to="/home">
          <Navbar.Brand >Project</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          <Link className='nav-link' to="/home">
           Home
            </Link>
            <Link className='nav-link' to="/features">
         Features
            </Link>
            <Link className='nav-link' to= "/pricing">
           Pricing
            </Link>

            <Link className='nav-link' to="/todos">
            Todos
            </Link>

          </Nav>
          </Navbar.Collapse>
        </Container>
        
        
      </Navbar>
 </header>
  )
}

export default TopHeader;
