import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootswatch/dist/yeti/bootstrap.min.css'
import './index.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <App title='React  - TypeScript App'/>

);

reportWebVitals();
