import React from 'react';
import { render } from 'react-snapshot';
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import isBot from './utils/isBot';

import App from './App';
import * as serviceWorker from './serviceWorker';

//import './App.css';
import './assets/scss/style.scss';

const history = createBrowserHistory();

if (!isBot()) {
  document.body.classList.add('has-animations');
}

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
