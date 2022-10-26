import React from 'react';

import { useLoaderData, Link } from 'react-router-dom';
import Coursecard from '../Coursecard/Coursecard';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div >
            <Container>
                <Row>
                    <Col xs={12} md={4} className="mt-5 p-3" >
                        <h1>All Courses</h1>
                        <div>
                            {
                                courses.map(course => <p key={courses.id}>
                                    <Link to={`/course/${course.id}`}>{course.title}</Link>
                                </p>)
                            }
                        </div>
                    </Col>
                    <Col xs={12} md={8}><CardGroup className='mt-5'>

                        {courses.map(course => {
                            return <Coursecard key={course.id} course={course}></Coursecard>;
                        })}
                    </CardGroup></Col>
                </Row>
            </Container>


        </div>
    );
};

export default Home;