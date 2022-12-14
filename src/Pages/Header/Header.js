import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');


    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

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

                        <Nav className='mx-3 fs-5 fw-bolder d-flex align-items-center'>
                            <Nav.Link ><Link style={{ textDecoration: "None", color: "black" }} to='/'>Courses</Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "None", color: "black" }} to='/blog'>Blog </Link></Nav.Link>
                            <Nav.Link><Link style={{ textDecoration: "None", color: "black" }} to='/faq'>FAQ </Link></Nav.Link>







                            {
                                user?.uid ?
                                    <>


                                        <Nav.Link onClick={handleLogOut}> <Button variant="danger">Log out</Button>  </Nav.Link>

                                    </>
                                    :
                                    <>
                                        <Nav.Link ><Link style={{ textDecoration: "None", color: "black" }} to='/login'><Button variant="primary" className="fw-bold"  >Log In</Button> </Link></Nav.Link>

                                    </>
                            }
                            {user?.photoURL ?
                                <><Image
                                    roundedCircle
                                    style={{ height: '50px' }}
                                    src={user?.photoURL} data-tip data-for='userName' referrerPolicy="no-referrer" >

                                </Image>
                                    <ReactTooltip id='userName'>{user?.displayName}</ReactTooltip></>
                                : <FontAwesomeIcon icon={faUser} />
                            }




                        </Nav>
                        <div className="d-flex">
                            Light
                            <div className="form-check form-switch mx-2">

                                <input onClick={toggleTheme} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                Dark
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;