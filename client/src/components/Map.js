import React, { Component } from "react";
import axios from "axios";
import dotenv
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";

const URL = "https://lambda-treasure-hunt.herokuapp.com/api/adv/";
const token = process.env.REACT_APP_API_KEY;
export default class Map extends Component {
  state = {
    nodes: []
  };
  componentDidMount() {
    axios.get("URL", token);
  }
  render() {
    const { nodes } = this.state;

    return <div>Treasure Map</div>;
  }
}
