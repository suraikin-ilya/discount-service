import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import './index.scss'

import App from './App'

const composeEnhancers =
    typeof  window === 'object' &&
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  application, document.getElementById('root')
)
