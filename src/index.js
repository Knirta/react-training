import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "modern-normalize/modern-normalize.css";
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);