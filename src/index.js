import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from "./store.js";

import App from './App.js';



const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    {/* React Redux provides the provider element to share the store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  ,
  rootElement
)
