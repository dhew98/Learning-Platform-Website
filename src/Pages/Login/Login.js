import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const Googleprovider = new GoogleAuthProvider();
    const Githubprovider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';



    const handleGoogle = () => {
        handleGoogleSignIn(Googleprovider)
            .then((result) => {


                const user = result.user;
            }).catch((error) => {
                console.log("error : ", error);
            })
    }
    const handleGithub = () => {
        handleGithubSignIn(Githubprovider).
            then((result) => {


                const user = result.user;
            }).catch((error) => {
                console.log("error : ", error);
            })
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }

            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container className="mt-5 p-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <><Form onSubmit={handleSubmit} className=" w-75 ">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button className='mx-3' variant="primary" type="submit">
                            Login
                        </Button>
                        OR
                        <Form.Text className="mx-3" >
                            <Link to='/register'>Create a new account</Link>
                        </Form.Text>
                        <div>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </div>

                    </Form>

                        <div className="d-grid gap-2 w-75 mt-3 ">
                            <Button variant="danger" onClick={handleGoogle}>
                                <img src='https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1' style={{ height: "50px", borderRadius: "50%", marginRight: "5px" }} alt=''></img> Sign in with Google
                            </Button>
                            <Button variant="secondary" onClick={handleGithub}>
                                <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' style={{ height: "50px", borderRadius: "50%", marginRight: "5px" }} alt=''></img> Sign in with Github
                            </Button>
                        </div></>

                </Col>
            </Row>
        </Container>

    );
};

export default Login;