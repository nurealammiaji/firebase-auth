import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import Forgot from './components/Forgot/Forgot.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "sign-up",
        element: <SignUp></SignUp>
      },
      {
        path: "sign-in",
        element: <SignIn></SignIn>
      },
      {
        path: "forgot",
        element: <Forgot></Forgot>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
