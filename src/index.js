import React from 'react';
import ReactDom from 'react-dom/client';
import { ContextProvider } from './contexts/ContextProvider';

import App from './App';
import './index.css'


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvider>
        <App />
    </ContextProvider>
  </React.StrictMode>
);