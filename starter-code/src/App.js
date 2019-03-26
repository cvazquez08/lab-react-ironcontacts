import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import ShowCelebs from "./ShowCelebs";
import CardContainer from './CardContainer'

class App extends Component {
  render() {
    return (
      <div className="App appContainer">
      {/* <h1>IRON CONTACTS</h1> */}
        {/* <ShowCelebs /> */}
        <CardContainer />
      </div>
    );
  }
}

export default App;
