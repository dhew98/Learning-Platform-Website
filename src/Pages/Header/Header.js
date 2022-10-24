import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"> <h3><FontAwesomeIcon icon={faGraduationCap} /> Pro Learner</h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                        </Nav>
                        <Nav className='mx-3 px-5 fs-5 fw-bolder'>
                            <Link to='/'><Nav.Link href="#pricing">Courses</Nav.Link></Link>
                            <Link to='/blog'><Nav.Link href="#pricing">Blog </Nav.Link></Link>
                            <Link to='/login'><Nav.Link href="#pricing">Log In </Nav.Link></Link>
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faUser} /> User</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;