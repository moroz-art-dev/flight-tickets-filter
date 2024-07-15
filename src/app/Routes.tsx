import routesConfig from '@config/routes';
import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter(routesConfig, {
  basename: process.env.PUBLIC_URL || '/',
});

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
