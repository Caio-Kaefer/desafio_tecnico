import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import WelcomePage from './pages/Welcome/WelcomePage.jsx';
import ServicePage from './pages/Service/ServicePage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage/>,
  },
  {
    path: "/service/:id",
    element: <ServicePage/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
