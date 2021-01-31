import React from 'react';
import '../styles/main.scss';
import Main from '../pages/Main'
import Footer from '../containers/global/Footer'
import Navigation from '../containers/global/navigation/Navigation'
import Browse from '../pages/Browse'
import Trip from '../pages/Trip'
import Purchase from '../pages/Purchase'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import FAQ from '../pages/FAQ'
import {Switch, Route, HashRouter} from 'react-router-dom';
import AcceptReserveTripModal from '../containers/modals/AcceptReserveTripModal';
import ReserveTimedOutModal from '../containers/modals/ReserveTimedOutModal';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/Browse/:start?/:end?/:location?/:length?/:country" component={Browse}/>
          <Route path="/Trip/:id" component={Trip}/>
          <Route path="/Purchase/:id" component={Purchase}/>
          <Route path="/About" component={About}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route component={NotFound}/>
        </Switch>
        <AcceptReserveTripModal />
        <ReserveTimedOutModal />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
