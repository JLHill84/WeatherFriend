import React, { Component } from "react";
import "./App.css";
import { WeatherPappa } from "./containers/WeatherPappa";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherPappa />
      </div>
    );
  }
}

export default App;
