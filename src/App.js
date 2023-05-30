import React from 'react';
import './App.css';
import Home from './pages/home';
import { ErrorPage } from './pages/errorPage';

import { RootComponent } from './pages/root';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Signin } from './pages/signin';
import { ListPage } from './pages/list';
import  Detail  from './pages/detail';
import 'react-slideshow-image/dist/styles.css'
import { RegisterForm } from './pages/register';
import { ListingForm } from './pages/cretaeListingForm';
import { FaSignInAlt } from 'react-icons/fa';
import { ContactUs } from './pages/contactus';
import { AboutUs } from './pages/aboutus';
import 'react-toastify/dist/ReactToastify.css'
import { TermsAndConditions } from './pages/termsandconditions';

import {Firebase} from "./firebase/firebase";
import { FirebaseContext } from "./context/firebase-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "Listing",
        element: <ListPage />,
      },
      {
        path: "Listing/detail/:id",
        element: <Detail />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "listingform",
        element: <ListingForm />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "termsandconditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  
]);



function App() {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <RouterProvider router={router} />
    </FirebaseContext.Provider>
  );
}



export default App;
