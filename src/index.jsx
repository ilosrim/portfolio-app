import React from 'react';
import ReactDOM from 'react-dom';
import Particls from './components/Particls';
import './index.css';
import Routing from './Routing';

ReactDOM.render(
  <React.StrictMode>
    <Particls />
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);