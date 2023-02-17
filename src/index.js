import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App , AppTwo} from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
      <Header />
    <App />
    <AppTwo />
  </React.StrictMode>
);

reportWebVitals();
