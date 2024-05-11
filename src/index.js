/* eslint-disable react/jsx-no-undef */
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Allfeatures from "./features/Allfeatures";
import Alldownloads from "./Download/Alldownloads";
import Allabout from "./About/Allabout";
import AllProduct from "./product/AllProduct";
import AllItems from "./Items/AllItems";
import AllShoping from "./shop/AllShoping";
import Allcart from "./cart/Allcart";
import { CartProvider } from "react-use-cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "features",
    element: <Allfeatures/>
  },
  {
    path: "Download",
    element : <Alldownloads/>
  },
  {
    path: "product",
    element : <AllProduct/>
  },
  {
    path: "Items",
    element : <AllItems/>
  },
  {
    path: "cart",
    element : <Allcart/>
  },
  {
    path: "shop",
    element : <AllShoping/>
  },
  {
    path : "About",
    element:<Allabout/>
  }
]);

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
  
);













// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';


// var raki = ReactDOM.createRoot(document.getElementById('root'));
// raki.render(<App />);