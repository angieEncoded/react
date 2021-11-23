import React from 'react';
import ReactDOM from 'react-dom';
import { AuthContextProvider } from "./components/store/auth-context"
import './index.css';
import App from './App';

// Now we wrap the entire app in our context provider that we custom built
ReactDOM.render(<AuthContextProvider><App /></AuthContextProvider>, document.getElementById('root'));
