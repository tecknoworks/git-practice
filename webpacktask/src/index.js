import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import otherMiddleware from 'other-middleware';
import thunk from "redux-thunk";
import rootReducer from './reducers';
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
   );

ReactDOM.render(
<Provider store={store}>
     <App />
</Provider>,
  document.getElementById('app')
);