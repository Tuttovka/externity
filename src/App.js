import React from 'react';
import './App.scss';
import {Navigation} from './components/header'
import {Footer} from './components/footer'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Footer/>
    </div>
  );
}

export default App;
