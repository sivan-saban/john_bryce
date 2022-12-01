import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header/Header';
import Routing from './Components/Layout/Routing/Routing';

function App() {
  return (
    <div className="App">
      <Header/>
        <hr/>
      <Routing/>
    </div>
  );
}

export default App;
