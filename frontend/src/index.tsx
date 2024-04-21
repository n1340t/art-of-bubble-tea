import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import LandingPage from './routes/page';
import RecipesPage from './routes/recipes/page';

const router = createHashRouter([
  {
    path: '/',
    Component: LandingPage,
  },
  {
    path: '/recipes',
    Component: RecipesPage
  }
]);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
