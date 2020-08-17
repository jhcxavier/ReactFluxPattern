import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import Layout from "./layout";
import * as serviceWorker from './serviceWorker';

// passing the component to the HTML page to be rendered.
ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
