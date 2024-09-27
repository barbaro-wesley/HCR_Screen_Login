import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Certifique-se de importar o BrowserRouter
import App from './App'; // Certifique-se de importar o componente App
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router> {/* Envolva o App com o Router aqui */}
      <App />
    </Router>
  </React.StrictMode>
);

