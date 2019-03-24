import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ShowContacts from './ShowContacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="tableStyle"> 
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </table>
        <ShowContacts />

      </div>
    );
  }
}

export default App;
