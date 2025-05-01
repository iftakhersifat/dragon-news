import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home.jsx';
// import Center from './Components/Root/Side/Center.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Center from './Components/Root/Side/Center.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true,
        // loader: ()=>fetch("/categories.json"),
       Component: Home},
       {
        path: "center/:id",
        element: <Home></Home>,
        children: [
          {
            index: true,
            Component: Center
          }
        ]
       },
    ]
    
  },
  {
    path: "*",
    Component: NotFound
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
