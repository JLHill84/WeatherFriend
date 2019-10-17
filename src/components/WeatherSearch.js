import React, { Component } from "react";

export class WeatherSearch extends Component {
  // constructor() {
  //     super()
  //     this.state = {
  //         placeHolder: true
  //     }

  componentDidMount = () => {
    console.log("WeatherSearch mounted!");
  };

  render() {
    return (
      <div id="search">
        <form id="searchForm">
          <p>
            <input id="city" type="text" placeholder="City..." />
          </p>
          <p>
            <input id="country" type="text" placeholder="Country..." />
          </p>
          <button id="searchSubmit" onClick={(e) => this.props.onClick(e, document.getElementById('city').value.concat(' ', document.getElementById('country').value))}>Check the Weather!</button>
        </form>
      </div>
    );
  }
}
