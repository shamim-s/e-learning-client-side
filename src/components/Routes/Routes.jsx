import Blog from "../Pages/Blog/Blog";
import CourseDetailsPage from "../Pages/CourseDetailsPage/CourseDetailsPage";
import CourseEnrollment from "../Pages/CourseEnrollment/CourseEnrollment";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoutes from "../PrivetRoutes/PrivetRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://e-tutor-server-shamim-s.vercel.app/courses`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/course-details/:id',
                element: <CourseDetailsPage></CourseDetailsPage>,
                loader: ({params}) => fetch(`https://e-tutor-server-shamim-s.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivetRoutes><CourseEnrollment></CourseEnrollment></PrivetRoutes>,
                loader: ({params}) => fetch(`https://e-tutor-server-shamim-s.vercel.app/checkout/${params.id}`)
            }
        ]
    }
])