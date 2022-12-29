import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';

import App from "./App";
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <Provider store = {store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
);