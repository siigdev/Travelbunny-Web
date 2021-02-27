import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './containers/App';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));
serviceWorker.register();


// Here goes the ripple code
// by Tiago Rangel, @tiagorangel2011

const Button = ({ children }) => {
  function createRipple(event) {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return <button onClick={createRipple}>{children}</button>;
};

const App = () => {
  return <Button>Click Me</Button>;
};

ReactDOM.render(<App />, document.getElementById("root"));
