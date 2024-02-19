import './index.css';

import * as ReactDOMClient from 'react-dom/client';
import  {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import LandingPage from './routes/page';
import RecipesPage from './routes/recipes/page';

ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recipes" element={<RecipesPage />} />
    </Routes>
  </BrowserRouter>
);