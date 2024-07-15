import HomePage from '@pages/HomePage';
import React from 'react';
import {Navigate} from 'react-router-dom';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <Navigate to='/' replace />,
  },
];

export default routesConfig;
