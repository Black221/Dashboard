import React from 'react';
import ReactDom from 'react-dom';
import { ContextProvider } from './contexts/ContextProvider';

import App from './App';
import './index.css'

ReactDom.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
     document.getElementById('root')
);

