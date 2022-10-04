import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div>
<img src={Loading} alt="Loading" />
      </div>
    )
  }
}

//sometimes our api is very fast and data is fetched rigt away and so in this case to test the spinner gif , it becomes difficult hence you can slow the network for testing purposes and go to inspect from there to network and from there to no throtting option
