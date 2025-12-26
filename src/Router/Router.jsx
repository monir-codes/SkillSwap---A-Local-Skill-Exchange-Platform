import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import Home from '../pages/Home';
import SkillDetails from '../components/SkillDetails';

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
                path: "/skill/:id",
                element: <SkillDetails></SkillDetails>,
                loader: ()=> fetch("/SkillList.json"),
            },
        ]
    }
])

export default Router;