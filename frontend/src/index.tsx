import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import './index.css';

// import LandingPage from './components/Landing';
import RecipesPage from './components/Recipes/Recipes'
import Test from './components/Tests/Test';

const router = createHashRouter([
	{
		path: '/',
		element: <Navigate to='/test' replace />
	},
	{
		path: '/recipes',
		Component: RecipesPage,
	},
	{
		path: '/test',
		Component: Test,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as Element).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
