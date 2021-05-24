import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const TRANSLATIONS = {
  es: { // make one default?
    home_h1: 'Título principal',
    home_desc: 'Hola que tal'
  },
  en: {
    home_h1: 'Main title',
    home_desc: 'How you doing'
  }
}

// <TagTrans tag="home_h1" />

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
