import React from 'react';
import '../styles/main.scss';
import Main from '../containers/Main'
import Footer from '../containers/global/Footer'
import Navigation from '../containers/global/navigation/Navigation'
import Browse from '../containers/Browse'
import Trip from '../containers/Trip'
import Purchase from '../containers/Purchase'
import NotFound from '../containers/NotFound'
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
