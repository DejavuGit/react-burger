import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import AppHeader from './components/AppHeader/AppHeader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <AppHeader />
  </React.StrictMode>
);


