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
import TermsAndConditions from '../pages/TermsAndConditions'
import Privacy from '../pages/Privacy'
import Career from '../pages/Career'
import Enquiry from '../pages/Enquiry'
import SiteMap from '../pages/SiteMap'
import Press from '../pages/Press'
import Contact from '../pages/Contact'
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
          <Route path="/Contact" component={Contact}/>
          <Route path="/Enquiry" component={Enquiry}/>
          <Route path="/Press" component={Press}/>
          <Route path="/TermsAndConditions" component={TermsAndConditions}/>
          <Route path="/Career" component={Career}/>
          <Route path="/SiteMap" component={SiteMap}/>
          <Route path="/Privacy" component={Privacy}/>
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
