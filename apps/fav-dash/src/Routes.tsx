import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './app/App';

const Test = () => {
  return <p>i am a test</p>;
};

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
        element: <Test />,
      },
    ],
  },
]);
