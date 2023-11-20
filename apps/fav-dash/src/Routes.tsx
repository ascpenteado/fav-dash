import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './app/App';
import Favorites from './app/Favorites/Favorites';
import AddFavorite from './app/Favorites/AddFavorite';

const NotFound: React.FC = () => {
  return <h1>404 - Not Found</h1>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Favorites />,
      },
      {
        path: '/novo',
        element: <AddFavorite />,
      },
    ],
  },
]);
