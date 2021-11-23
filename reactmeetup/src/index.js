import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { FavoritesContextProvider } from "./store/favorites-context"

ReactDOM.render(
  // Now all the components can talk to the context
  <FavoritesContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </FavoritesContextProvider>,
  document.getElementById('root')
);
