import routesConfig from '@config/routes';
import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter(routesConfig, {
  basename: '/flight-tickets-filter',
});

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
