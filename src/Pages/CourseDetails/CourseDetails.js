import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";


const CourseDetails = () => {


    const ref = React.createRef();
    const courseDetails = useLoaderData();
    const [course] = courseDetails;
    const { id, detail, star, description, img, price, quiz, time, video, project, enroll, title } = course;
    return (
        <div>
            <div className='mx-auto mt-5 text-center'>
                <Pdf targetRef={ref} filename='CourseDetails.pdf'>
                    {({ toPdf }) => <Button onClick={toPdf}>Download Pdf</Button>}
                </Pdf>
            </div>

            <Container >
                <Row>

                    <Col xs={6} className='mt-2 p-5'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>

                                <Card.Text>
                                    {detail}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={6} className='mt-2 p-5'>

                        <div ref={ref}>
                            <h2>Course Details </h2>
                            <p>{description}</p>
                            <p >Price : <span className='fw-bold'>{price}</span> </p>
                            <p > Rating : <span className='fw-bold'>{star}</span>  <FontAwesomeIcon className='text-warning' icon={faStar} /></p>
                            <p>Duration : <span className='fw-bold'>{time}</span></p>
                            <p>Tota Video :<span className='fw-bold'>{video}</span></p>
                            <p>Quiz Set:<span className='fw-bold'>{quiz}</span></p>
                            <p>Total Project : <span className='fw-bold'>{project}</span></p>
                            <p>Already Enrolled : <span className='fw-bold'>{enroll}+ Students</span></p>
                            <Link to={`/checkout/${id}`}> <Button variant="primary">Get premium access</Button></Link>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default CourseDetails;