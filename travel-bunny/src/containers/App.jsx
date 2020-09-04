import React from 'react';
import '../styles/app.scss';
import AddTodo from '../containers/AddTodo'
import Footer from '../components/global/Footer'

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Footer />
    </div>
  );
}

export default App;
