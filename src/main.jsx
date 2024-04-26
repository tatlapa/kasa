import React from 'react'
import ReactDOM from 'react-dom/client'
// import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './components/Banner.jsx'
import './styles/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Banner />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
