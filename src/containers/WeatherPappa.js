import React, {Component} from 'react'
import {WeatherSearch} from '../components/WeatherSearch'

export class WeatherPappa extends Component {
// constructor() {
//     super()
//     this.state = {
//         placeHolder: true
//     }
componentDidMount = () => {
    console.log("WeatherPappa mounted!")
}

handleSearch = (e, queryString) => {
    e.preventDefault();
    console.log(queryString)
}

    render() {
        return(
            <div>
            <WeatherSearch onClick={this.handleSearch} />
            </div>
        )
    }
}
