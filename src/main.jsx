import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Product from './components/product/Product';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Header from './components/Header/Header';
import Detail from './components/DEtails/Detail';
import Errorpage from './components/Errorpage/Errorpage';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Header></Header>,
    errorElement:<Errorpage></Errorpage> ,
    children:[
      {
        path:'/home',
        element:<Home></Home>

      },
      {
        path:'/product',
        loader:()=> fetch('https://fakestoreapi.com/products'),
        element:<Product></Product>
      },
      {
        path:'/detail/:id',
        loader:({params})=> fetch(`https://fakestoreapi.com/products/${params.id}`),
        element:<Detail></Detail>

      },
      {
        path:'/contact',
        element:<Contact></Contact>

      },
      {
        path:'/about',
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />

  </React.StrictMode>,
)
