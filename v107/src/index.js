import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store1 from './Store'
ReactDOM.render(
    <Provider store={store1}>
        <App/>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
