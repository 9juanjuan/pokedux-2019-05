import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokeList from './containers/PokeListContainer'
import VisibilityButton from './containers/VisibilityButtonContainer'
function App() {
  return (
    <div className="App">
      <h1>PokeThings</h1> 
      <VisibilityButton label="all" />
      <VisibilityButton label="caught" />
      <VisibilityButton label="uncaught" />

      <PokeList />
    </div>
  );
}

export default App;
