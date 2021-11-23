import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { BsFillEmojiSunglassesFill, BsSunglasses } from 'react-icons/bs';

const Header = () => {
    const {user, logOut} = useAuth();
    
    return (
        <>
          <Navbar bg="" variant="dark" sticky="top" collapseOnSelect expand="lg" style={{backgroundColor: 'lightcoral'}}>
          <Container className="fst-italic fw-bolder">
            <Navbar.Brand as={ Link }
             to="/"><BsSunglasses /> Mordern EyeGlasses <BsFillEmojiSunglassesFill /> </Navbar.Brand>
             <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={ Link }
               to="/" className="text-decoration-none">Home</Nav.Link>
              <Nav.Link as={ Link }
              to="/explore">Explore</Nav.Link>
              <Nav.Link as={ Link }
              to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={ Link }
              to="/about">About Us</Nav.Link>
              {
              user?.email ?
              <Button onClick={logOut} color="inherit">Logout</Button>
               : 
              <Nav.Link as={ Link }
              to="/login">Login</Nav.Link>
              } 
              <Navbar.Toggle />
              <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
};

export default Header;