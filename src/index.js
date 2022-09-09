import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
