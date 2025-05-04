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
import AuthLayout from './Components/AuthLayout/AuthLayout.jsx';
import Login from './Components/AuthLayout/Login.jsx';
import Register from './Components/AuthLayout/Register.jsx';
import AuthProvider from './Components/Firebase/AuthProvider.jsx';
import DragonDetailsNews from './Components/Root/Side/DragonDetailsNews.jsx';
import PrivateRoute from './Components/Firebase/PrivateRoute.jsx';
import DragonNews from './Components/Root/Side/DragonNews.jsx';


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

      //  authLayout

       {
        path: "auth",
        Component: AuthLayout,
        children: [
          {
            path: "/auth/login",
            Component: Login
          },
          {
            path: "/auth/register",
            Component: Register
          },
        ]
       },


      //  dragon news
      {
        path: "/dragon/:id",
        loader: ()=>fetch("/news.json"),
        element: 
          <PrivateRoute>
            <DragonNews></DragonNews>
          </PrivateRoute>
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
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
