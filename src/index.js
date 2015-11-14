import '../node_modules/babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import App from 'src/containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from 'src/reducers/index.js';


const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, thunkMiddleware)(createStore);

const store = createStoreWithMiddleware(rootReducer);


injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


