import './index.css';
import LandingPage from './routes/page';
import RecipesPage from './routes/recipes/page';
import * as ReactDOM from 'react-dom/client';
import  {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/recipes",
    element: <RecipesPage />
  }
]);

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <RouterProvider router={router} />
);
