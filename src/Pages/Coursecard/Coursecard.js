import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CourseDetails from '../CourseDetails/CourseDetails';

import { Link } from 'react-router-dom';

const Coursecard = ({ course }) => {
    const { title, detail, price, star, img, id } = course;

    const handleCourse = () => {
        return <CourseDetails></CourseDetails>
    }

    return (
        <div>
            <div className='mx-5 my-3'>
                <Card style={{ width: '18rem' }}>
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

                        <Link to={`/course/${id}`}> <Button onClick={handleCourse} variant="primary">Go To Course</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Coursecard;