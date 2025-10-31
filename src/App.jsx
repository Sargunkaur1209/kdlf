import React from 'react';
import {createBrowserRouter , RouterProvider} from "react-router-dom"
// FIX: Added .jsx extension to resolve import errors
import Layout from "./LAYOUT/Layout.jsx";
import Home from "./PAGES/Home.jsx";
import About from "./PAGES/About.jsx";
import Contact from "./PAGES/Contact.jsx";
import Learning from "./PAGES/Learning.jsx";
import Signup from "./PAGES/Signup.jsx";
import Login from "./PAGES/Login.jsx";
import ExploreEvents from "./PAGES/ExploreEvents.jsx";
import OngoingEvents from "./PAGES/OngoingEvents.jsx";
// NOTE: You must create this component in ./PAGES/EventGalleryPage.jsx 
// It will handle displaying all the photos for a specific event.
import EventGalleryPage from "./PAGES/EventGallery.jsx"; 


function App(){
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Signup",
          element: <Signup />,
        },
        {
          path: "/Learning",
          element: <Learning />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/ExploreEvents",
          element: <ExploreEvents />,
        },
        // Dynamic route for event galleries (matches paths like /events/gurpurab2024)
        {
          path: "/events/:eventId",
          element: <EventGalleryPage />,
        },
        {
          path: "/OngoingEvents",
          element: <OngoingEvents />,
        }
        ]
      }
    ]
  )
  return (
    <RouterProvider router = {router} />
  );
}

export default App
