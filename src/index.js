import * as React from 'react';
import { HashRouter  } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { createRoot } from 'react-dom/client';
createRoot(document.getElementById('root')).render(
  <HashRouter >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
