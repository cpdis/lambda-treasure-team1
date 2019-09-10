import React, { Component } from "react";
import axios from "axios";
import data from "server\map_data.json";

import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";

const URL = "https://lambda-treasure-hunt.herokuapp.com/api/adv/";
const token = process.env.REACT_APP_API_KEY;
export default class Map extends Component {
  state = {
    map: {},
    mapLoaded: false
  };
  componentDidMount() {
    if (!localStorage.hasOwnProperty("data")) {
      localStorage.setItem("data", JSON.stringify(map));
    }
    let val = JSON.parse(localStorage.getItem("map"));
    this.setState({ map: val, mapLoaded: true });
  }
  render() {
    return <div>Treasure Map</div>;
  }
}
