import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'

import App from './App';
import Home from './pages/Home';
import Api from './API/Api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/teste',
    element: <Api/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
