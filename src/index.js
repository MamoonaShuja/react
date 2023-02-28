import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, AppTwo, UserName} from './App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const users = [
    {
        'name' : "Mamoona",
        "lname" : "Shuja"
    },
    {
        'name' : "Ammar",
        "lname" : "Hasan"
    },
    {
        'name' : "Mubashir",
        "lname" : "Ali"
    },
    {
        'name' : "Muzamil",
        "lname" : "Shakeel"
    }

]


root.render(
  <React.StrictMode>
      <Header />
    <App  />
    <UserName  />
    <AppTwo users={users} />
  </React.StrictMode>
);

reportWebVitals();
