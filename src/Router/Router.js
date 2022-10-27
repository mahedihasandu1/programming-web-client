import { createBrowserRouter } from "react-router-dom";
import Blog from '../Component/Blog/Blog';
import Home from "../Component/Home/Home";
import Main from '../Component/Main/Main';
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import Registration from "../Component/LoginRegistration/Registration";
import Login from "../Component/LoginRegistration/Login";
import Faq from "../Component/FAQ/Faq";
import Courses from "../Component/Courses/Courses";
import CourseDetails from "../Component/Courses/CourseDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router=createBrowserRouter([
    {path:'/',element:<Main></Main> ,errorElement:<ErrorPage></ErrorPage> ,children:[
        {path:'/',element:<Home></Home>},
        {path:'/home',element:<Home></Home>},
        {path:'/blog',element:<Blog></Blog>},
        {path:'/faq',element:<Faq></Faq>},
        {path:'/courses',element:<Courses></Courses> ,loader:()=>fetch('http://localhost:5000/courses')} ,
       {path:'/courses/:id', element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,loader:({params})=>fetch(`http://localhost:5000/courses/${params.id}`)},
        {path:'/login',element:<Login></Login>},
        {path:'/registration',element:<Registration></Registration>},
    ]},
    
]);
