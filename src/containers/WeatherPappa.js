import React, { Component } from "react";
import { WeatherSearch } from "../components/WeatherSearch";
import { CONSTANTS } from "../containers/CONSTANTS";
import { WeatherDisplay } from "../components/WeatherDisplay";

export class WeatherPappa extends Component {
  constructor() {
    super();
    this.state = {
      weather: null
    };
  }
  componentDidMount = () => {
    
  };

  handleCurrentWeather = (e, queryString) => {
    e.preventDefault();
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${queryString}&appid=${CONSTANTS.API_KEY}&units=imperial`
    )
      .then(res => res.json())
      .then(res =>
        this.setState({
          weather: res
        })
      );
  };

  render() {
    if (this.state.weather === null) {
      return (
        <div>
          <WeatherSearch onClick={this.handleCurrentWeather} />
        </div>
      );
    } else {
      return (
        <div>
          <WeatherDisplay weather={this.state.weather} styles={CONSTANTS.styles} />
        </div>
      );
    }
  }
}
