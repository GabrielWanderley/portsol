import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalcontextProvider } from './context/index';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalcontextProvider>
      <App />
    </ModalcontextProvider>
  </React.StrictMode>
);

