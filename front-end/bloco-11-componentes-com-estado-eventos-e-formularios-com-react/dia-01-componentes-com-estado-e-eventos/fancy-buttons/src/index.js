import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const texts = ['botão 01', 'botão 02', 'botão 03'];

root.render(
  <React.StrictMode>
    {
      texts.map((text) => <App key={text} text={text} />)
    }
  </React.StrictMode>
);

