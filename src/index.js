import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

import createHistory from "history/createBrowserHistory";





ReactDOM.render(
  <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
    <App />
  </Router>,
  document.getElementById('root')
);
