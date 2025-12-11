import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TestComponent from './tutorial/04-conditional-rendering/1-multiple-returns';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestComponent/>
    <Footer />
  </React.StrictMode>
);