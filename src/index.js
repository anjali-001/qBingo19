import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Route} from 'react-router-dom';
import DisplayContextProvider from './DisplayContext'
ReactDOM.render(
  <React.StrictMode>
    <DisplayContextProvider>
      <Route>
    <App />
    </Route>
    </DisplayContextProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
