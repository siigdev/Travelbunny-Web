import React from 'react';
import '../styles/app.scss';
import AddTodo from '../containers/AddTodo'
import Footer from '../components/global/Footer'
import VisibleList from '../containers/VisibleList'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleList />
      <Footer />
    </div>
  );
}

export default App;
