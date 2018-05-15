import React, { Component } from 'react';
import './App.css';
import List from '../list/List';

class App extends Component {
  render = () => {

    return (
      <div className="App">
        <header>
          <h1>ReactTrello</h1>
        </header>

        <List />
      </div>
    );
  }
}

export default App;
