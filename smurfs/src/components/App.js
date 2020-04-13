import React, { Component } from "react";
import "./App.css";

// components
import NewSmurfForm from './NewSmurfForm.js';
import Smurfs from './Smurfs.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <Smurfs />
        <NewSmurfForm />
      </div>
    );
  }
}

export default App;
