
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { DynamicStyles } from './components/DynamicStyles';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <>
      <DynamicStyles />
      <App />
    </>
  );
}