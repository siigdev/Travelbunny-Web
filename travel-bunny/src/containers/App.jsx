import React from 'react';
import '../styles/main.scss';
import AddTodo from '../containers/AddTodo'
import Footer from '../components/global/Footer'
import Navigation from '../components/global/Navigation'
import Browse from '../containers/Browse'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
          <Switch>
            <Route path="/" exact component={AddTodo}/>
            <Route path="/Browse" component={Browse}/>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
