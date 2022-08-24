import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Link} from "react-router-dom";

const Header = () => {
  return (
   <>
       <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
          <Container>
          <Link to="/" className='navbar-brand'>Navbar</Link>
          <   Nav className="me-auto">
          <Link to="/register" className='nav-link'>Register</Link>
            
            </Nav>
          </Container>
      </Navbar>

   </>
  )
}

export default Header
