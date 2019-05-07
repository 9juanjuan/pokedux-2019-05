import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from './containers/PokeListContainer'

function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1> 
      <PokeList />
    </div>
  );
}

export default App;
