import React, { Component } from 'react';
import CandidateTable from './CandidateTable.js';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <CandidateTable/>
      </div>
    );
  }
}

export default App;
