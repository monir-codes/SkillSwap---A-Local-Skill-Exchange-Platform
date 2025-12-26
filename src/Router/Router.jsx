import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true, 
                path: "",
                element: <Home></Home>,
                loader: ()=> fetch("/SkillList.json")
            },
            {
                path: ""
            },
        ]
    }
])

export default Router;