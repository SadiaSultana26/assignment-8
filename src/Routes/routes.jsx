import React from 'react';

import {
   createBrowserRouter,
   
  } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Installation from '../pages/Installation/Installation';
import HeroApp from '../pages/HeroApp/HeroApp';

  

export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement: <ErrorPage></ErrorPage>,
   children: [
    {
        index: true ,
        loader:()=>fetch('Data.json'),
        path: "/" ,
        Component: Home
    },
    {
        path:'/about',
        Component:About
    },
    {
        path:'/Apps',
        Component:HeroApp
    },
    {
        path:'/Installation',
        Component:Installation
    }
   ]
  },
]);