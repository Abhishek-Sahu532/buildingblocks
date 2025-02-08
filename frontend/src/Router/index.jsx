import { createBrowserRouter } from 'react-router-dom';
import {
  AboutUsPage,
  AgentListPage,
  AgentProfile,
  ContactUs,
  FAQPage,
  LandingPage,
  Listing,
  NotFound,
  PrivacyPolicyPage,
  PropertyDetailsPage,
  OwnerSignUp,
  AgentSignUp,
  OwnerSignIn,
  AgentSignIn,
  OwnerOTPPage,
  AddProperty
} from '../Pages';
import App from '../App';
export const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/listing',
        element: <Listing />
      },
      {
        path: '/about-us',
        element: <AboutUsPage />
      },
      {
        path: '/agents',
        element: <AgentListPage />
      },
      {
        path: '/agent-profile',
        element: <AgentProfile />
      },
      {
        path: '/owner-profile',
        element: <AgentProfile />
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/faq',
        element: <FAQPage />
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicyPage />
      },
      {
        path: '/property-details',
        element: <PropertyDetailsPage />
      }
    ]
  },
  {
    path: '/agent-signin',
    element: <AgentSignIn />
  },
  {
    path: '/agent-signup',
    element: <AgentSignUp />
  },
  {
    path: '/owner-signin',
    element: <OwnerSignIn />
  },
  {
    path: '/owner-signup',
    element: <OwnerSignUp />
  },
  {
    path: '/otp-verification',
    element: <OwnerOTPPage />
  },
  {
    path: '/add-property',
    element: <AddProperty />
  }
]);
