import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/courses"),

            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])