import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux Setup
import { stateStore } from './app/stateStore';//store we created
import { Provider } from 'react-redux';//to allow redux to work

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stateStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
