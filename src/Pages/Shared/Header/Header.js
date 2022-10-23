import React, { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import NavDropdown from "react-bootstrap/NavDropdown";
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        //console.log('User Logged Out');
      })
      .catch(error => console.error(error))
  };

    return (
      <Navbar
        className="mb-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <strong>Dragon News</strong>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button
                      onClick={handleLogOut}
                      className="ms-2"
                      variant="light"
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <Button className="me-2" variant="primary">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="outline-primary">Register</Button>
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link eventKey={2}>
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUserAlt />
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;