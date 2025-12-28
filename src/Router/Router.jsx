import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import SkillDetails from '../components/SkillDetails';
import PrivateRoute from '../Provider/PrivateRoute';
import Login from '../pages/Login';
import AuthLayout from '../Layouts/AuthLayout';
import Signup from '../pages/Signup';
import Loading from '../pages/Loading';
import MyProfile from '../pages/MyProfile';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true, 
                path: "",
                element: <Home></Home>,
                loader: ()=> fetch("/SkillList.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/skill/:id",
                element: (
                <PrivateRoute>
                 <SkillDetails></SkillDetails>
                </PrivateRoute>),
                loader: ()=> fetch("/SkillList.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/signup",
                element: <Signup></Signup>,
            },
        ]
    },
    {
        path: "/profile",
        element: <MyProfile></MyProfile>
    },
])

export default Router;