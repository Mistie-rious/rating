import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Thanks from './thanks.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "thanks",
    element: <Thanks/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
