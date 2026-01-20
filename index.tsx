
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { DynamicStyles } from './components/DynamicStyles.tsx';

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