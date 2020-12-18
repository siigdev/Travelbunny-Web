import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './containers/App';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
  rootReducer, 
  applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
serviceWorker.register();
