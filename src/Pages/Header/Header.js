import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';

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
                    <Navbar.Brand > <h3><FontAwesomeIcon icon={faGraduationCap} /> <Link style={{ textDecoration: "None", color: "black" }} to='/' >Pro Learner</Link></h3>  </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">



                        </Nav>
                        <Nav className='mx-3 px-5 fs-5 fw-bolder d-flex align-items-center'>
                            <Nav.Link ><Link style={{ textDecoration: "None", color: "black" }} to='/'>Courses</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "None", color: "black" }} to='/blog'>Blog </Link></Nav.Link>
                            {
                                user?.uid ?
                                    <>

                                        <Nav.Link className='text-primary'>{user?.displayName}</Nav.Link>
                                        <Nav.Link onClick={handleLogOut}> <Button variant="dark">Log out</Button>  </Nav.Link>

                                    </>
                                    :
                                    <>
                                        <Nav.Link ><Link style={{ textDecoration: "None", color: "black" }} to='/login'><Button variant="primary" className="fw-bold"  >Log In</Button> </Link></Nav.Link>

                                    </>
                            }



                            {user?.photoURL ?
                                <Image
                                    roundedCircle
                                    style={{ height: '50px' }}
                                    src={user?.photoURL}>
                                </Image>
                                : <FontAwesomeIcon icon={faUser} />
                            }






                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;