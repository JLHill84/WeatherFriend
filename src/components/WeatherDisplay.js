import React, { Component } from "react";

export class WeatherDisplay extends Component {
  // constructor() {
  //     super()
  //     this.state = {
  //         placeHolder: true
  //     }

  componentDidMount = () => {
    // console.log("WeatherSearch mounted!");
  };

  render() {
    return (
      <div id="searchResults">
        <h2>Temperature </h2>
        <h4>{this.props.weather.main.temp + "F currently"} with a high of {this.props.weather.main.temp_max + "F today."}</h4>

        <h2>Humidity</h2>
        <h4>{this.props.weather.main.humidity + "%"}</h4>


      </div>
    );
  }
}
