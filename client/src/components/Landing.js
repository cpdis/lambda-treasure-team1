import React, { Component } from "react";
import data from "../data/graph_data.json";
import Info from "./Info.js";
class Landing extends Component {
  state = {
    data: [data],
    currentRoom: 465,
    id: Date.now() + 1
  };
  roomData = () => {};
  render() {
    const data = this.state;
    console.log(data);
    return (
      <div>``
        <Info
          list={this.state.data}
          key={this.state.id}
          currentRoom={this.state.currentRoom}
        />
      </div>
    );
  }
}

export default Landing;
