import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

const Navigation = () => {

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      window.location.reload();  // Force a reload to update the auth state in the app
    } catch (error) {
      console.log('error signing out:', error);
    }
  }

  return (
    <Navbar bg="light" expand="lg" className="navigation">
      <Navbar.Brand className="app-name" href="#">Orderfy</Navbar.Brand>
      <Navbar.Brand className="interface-title" href="#">Order Interfaces</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Another Link</Nav.Link>
        </Nav>
        <Button variant="outline-danger" className="logout-button" onClick={handleLogout}>Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;