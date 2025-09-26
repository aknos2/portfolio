import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layouts/Layout.jsx'
import App from './App.jsx'
import './data/i18n.js'
import './styles/root.css'
import './styles/reset.css'
import ErrorPage from './components/ErrorPage.jsx'

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload critical GSAP
  const gsapLink = document.createElement('link');
  gsapLink.rel = 'modulepreload';
  gsapLink.href = '/node_modules/gsap/all.js';
  document.head.appendChild(gsapLink);
};

// Call preload function immediately
preloadCriticalResources();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "projects",
        element: <App />,
      },
      {
        path: "about",
        lazy: async () => {
          const { default: About } = await import("./components/About/About.jsx")
          return { Component: About}
        }
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)