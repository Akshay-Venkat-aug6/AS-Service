import React from 'react';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import './assets/css/style.css';
import './assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
