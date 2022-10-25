import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        What is `cors`?
                    </h3>
                    <p className='activities-details'>
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        Why are you using `firebase`? What other options do you have to implement authentication?
                    </h3>
                    <p className='activities-details'>
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        How does the private route work?
                    </h3>
                    <p className='activities-details'>
                        The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </p>


                </div>

            </div>
            <div className='blogs'>

                <div className='blog-info'>
                    <img src="https://reactjs.org/logo-og.png" alt=""></img>
                    <h3 className='activities-name'>
                        What is Node? How does Node work?
                    </h3>
                    <p className='activities-details'>
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>


                </div>

            </div>


        </div >
    );
};

export default Blog;