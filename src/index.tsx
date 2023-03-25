import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

declare global {
  interface Window { perspective: any; }
}

ReactDOM.render(<App />, document.getElementById('root'));
