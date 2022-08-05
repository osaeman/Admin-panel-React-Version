import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({ status: false, formdata: {}, editpagecontent: {}, activelink: "" })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export { setGlobalState, useGlobalState };