import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MyFavouriteContextProvider } from './store/resort-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyFavouriteContextProvider>
        <App />
      </MyFavouriteContextProvider>

    </BrowserRouter>
  </React.StrictMode>
);

