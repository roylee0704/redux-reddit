import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './reducers/index.js';

let store = createStore(AppReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


