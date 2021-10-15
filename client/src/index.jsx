import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Store from './Redux/store'
ReactDOM.render(
  <React.StrictMode>
  <Provider store={Store}>
  <BrowserRouter>
     <App />
  </BrowserRouter>
  </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

