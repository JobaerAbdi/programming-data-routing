import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Roots from './components/Roots/Roots';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Roots></Roots>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : ()=> fetch('https://openapi.programming-hero.com/api/quiz')
      },
      {
        path : '/:detailId',
        element : <Details></Details>,
        loader : ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.detailId}`)
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/service',
        element : <Services></Services>
      },
      {
        path : '/contact',
        element : <Contact></Contact>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
