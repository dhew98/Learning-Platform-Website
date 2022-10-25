import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


const Checkout = () => {
    const courseDetails = useLoaderData()
    const [course] = courseDetails;
    const { id, detail, star, description, img, price, quiz, time, video, project, enroll, title } = course;
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col sm={8}>
                        <h1>Your Cart</h1>

                        <Container className='mt-5'>
                            <Row>
                                <Col sm> <Card style={{ width: '23rem' }}>
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                    </Card.Body>
                                </Card></Col>
                                <Col sm> <h3>Course Overview</h3>
                                    <div >
                                        <p>Duration : <span className='fw-bold'>{time}</span></p>
                                        <p>Tota Video :<span className='fw-bold'>{video}</span></p>
                                        <p>Quiz Set:<span className='fw-bold'>{quiz}</span></p>
                                        <p>Total Project : <span className='fw-bold'>{project}</span></p>
                                        <p>Already Enrolled : <span className='fw-bold'>{enroll}+ Students</span></p>
                                    </div></Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm={4}>
                        <h1>Summary</h1>

                        <div className='mt-5'>
                            <p>Total price : <span className='fw-bold'>{price}</span></p>
                            <p>Discount : <span className='fw-bold'>$0</span></p>
                            <hr
                                style={{
                                    height: '3px',
                                    width: "75%"
                                }} />
                            <p>Total Cost : <span className='fw-bold'>{price}</span></p>

                        </div>

                        <Button>Confirm Purchase</Button>
                    </Col>
                </Row>
                <Row></Row>

            </Container>
        </div>
    );
};

export default Checkout;