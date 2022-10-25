import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                            <Link to='/'><Nav.Link >Courses</Nav.Link></Link>
                            <Link to='/blog'><Nav.Link>Blog </Nav.Link></Link>
                            <>
                                {
                                    user?.uid ?
                                        <>

                                            <Nav.Link className='text-primary'>{user?.displayName}</Nav.Link>
                                            <Nav.Link href="#pricing" onClick={handleLogOut}> <Button variant="dark">Log out</Button>  </Nav.Link>

                                        </>
                                        :
                                        <>
                                            <Link to='/login'><Nav.Link href="#pricing"><Button variant="primary" className="fw-bold"  >Log In</Button> </Nav.Link></Link>
                                            <Nav.Link href="#pricing"><FontAwesomeIcon icon={faUser} /> User</Nav.Link>
                                        </>
                                }


                            </>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;