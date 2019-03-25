import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import ShowCelebs from "./ShowCelebs";

class App extends Component {
  render() {
    return (
      <div className="App appContainer">
      <h1>IRON CONTACTS</h1>
        <ShowCelebs />
      </div>
    );
  }
}

export default App;
