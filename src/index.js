import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CyberStrengthQuiz from './Quiz';
import { inject } from '@vercel/analytics';

inject();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CyberStrengthQuiz />
  </React.StrictMode>
);