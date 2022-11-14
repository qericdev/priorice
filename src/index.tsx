import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Services from './Services';
import News from './News';
import Contact from './Contact';
import SelectedNew from './news/SelectedNew';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "services",
    element: <Services />
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "news/:newsId",
    element: <SelectedNew />,
  },
  {
    path: "contact",
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


