import * as React from 'react';
import { BrowserRouter  } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(
  <BrowserRouter  basename="/goit-react-hw-05-movies/" >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
