import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom';

const CourseDetails = () => {

    const courseDetails = useLoaderData();
    const [course] = courseDetails;
    const { id, detail, star, description, img, price, quiz, time, video, project, enroll, title } = course;
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6} className='mt-5 p-5'>
                        <Card style={{ width: '30rem', height: "100%" }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    {detail}
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <p className='fw-bold'>{price}</p>
                                    <p > Rating : <span className='fw-bold'>{star}</span>  <FontAwesomeIcon className='text-warning' icon={faStar} /></p>
                                </div>
                                <Link to={`/checkout/${id}`}> <Button variant="primary">Start Course</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} className='mt-5 p-5'>
                        <h2>Course Details </h2>

                        <div >
                            <p>{description}</p>
                            <p>Duration : <span className='fw-bold'>{time}</span></p>
                            <p>Tota Video :<span className='fw-bold'>{video}</span></p>
                            <p>Quiz Set:<span className='fw-bold'>{quiz}</span></p>
                            <p>Total Project : <span className='fw-bold'>{project}</span></p>
                            <p>Already Enrolled : <span className='fw-bold'>{enroll}+ Students</span></p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default CourseDetails;