import dotenv from 'dotenv';
import webpackDev from './dev';
import cors from 'cors';

import express from 'express';
import path from 'path';
import fs from 'fs';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import LandingPage from '../frontend/src/routes/page';

// Configuration of environment variables
const dotenvResult = dotenv.config();
if (dotenvResult.error) {
  throw dotenvResult.error;
}

const port = process.env.PORT || 3000;
const app = express();

const dev = process.env.NODE_ENV !== 'production';

// Development-specific middleware for Webpack
if (dev) {
  app.use(webpackDev.comp).use(webpackDev.hot);
}

// Enable all CORS requests
app.use(cors());

// Server-side rendering for the landing page at the root path
app.use('^/$', (req, res, next) => {
  const app = ReactDOMServer.renderToString(React.createElement(LandingPage));

  const indexFile = path.resolve('./frontend/public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('An error occurred');
    }
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`));
  });
});

// Static file serving for the frontend
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

// Catch-all route for SPA behavior, serving the index.html for any non-matched route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'frontend', 'public', 'index.html'));
});

// Start the server
const runningMessage = `Server running at http://localhost:${port}`;
app.listen(port, () => {
  console.log(runningMessage);
});
