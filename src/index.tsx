import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Button htmlType="button" type="primary" size="small" extraClass="ml-2">
  Нажми на меня@
</Button>
  </React.StrictMode>
);


