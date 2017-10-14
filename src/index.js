import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { App } from './containers/app';
import rootReducer from './redux/reducers';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store} key="provider">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
