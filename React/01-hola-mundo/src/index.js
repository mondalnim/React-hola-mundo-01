import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NombreCompleto as Name } from './components/NombreCompleto';
import Mascota from './components/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* //es por el stric mode que se repite  */}
    <App />
   <Name name="Sergio" age="30"/>
   <Mascota name="Solovino" age= {8} />
   <Name name="Pax" age="25"/>
   <Name name="Miriam" age="24"/>
   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
