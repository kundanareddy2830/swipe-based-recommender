import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create pattern overlay
const patternOverlay = document.createElement('div');
patternOverlay.className = 'pattern-overlay';
document.body.appendChild(patternOverlay);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove or comment out reportWebVitals()
