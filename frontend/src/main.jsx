import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./Styles/font.css";
import "./Styles/index.css";
import "./Styles/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Listing from "./Pages/Listing.jsx";
import AboutUsPage from "./Pages/AboutUs.jsx";
import AgentList from "./Pages/AgentList.jsx";
import AgentProfile from "./Pages/AgentProfile.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import FAQPage from "./Pages/FAQ.jsx";
import PrivacyPolicyPage from "./Pages/Privacypolicy.jsx";
import PropertyDetailsPage from "./Pages/PropertyDetails.jsx";
import NotFound from "./Pages/NotFound.jsx";
import SwiperCard from "./Components/SwiperCard.jsx";
// import A from "./Pages/A.jsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/listing",
        element: <Listing />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/agents",
        element: <AgentList />,
      },
      {
        path: "/agent-profile",
        element: <AgentProfile />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FAQPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/property-details",
        element: <PropertyDetailsPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/testing",
    element: <SwiperCard/>,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
