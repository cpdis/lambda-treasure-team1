import React, { Component } from "react";
import { FlexibleXYPlot, LineSeries, MarkSeries } from "react-vis";
import room_data from "../data/graph.json";
import map_data from "../data/map_data.json";
import styled from "styled-components";

const StyledMap = styled.div`
  marginleft: 10%;
  width: 66%;
  height: 100%;
  flex: 1;
  padding: 3rem 3rem 3rem 3rem;
  position: relative;
`;

class Map extends Component {
  state = {
    lines: [],
    rooms: []
  };
  componentDidMount() {
    // Create arrays to hold point coordinates and links
    const coordinates = {};

    // Loop through each room in the room_data object

    for (let room in room_data) {
      // Set data equal to the first element (x, y coordinates)
      // in each room of the room_data object
      // console.log("Room Data", room_data);
      let data = room_data[room];
      let map = map_data[room];
      // console.log("Data", data, "Map", map);

      coordinates[room] = [];
      console.log("Coords", coordinates);
      coordinates[room].push(data, map);

      for (let i = 0; i < 500; i++) {
        let room = coordinates[i][0];
        let exits = coordinates[i][1];
        console.log("Cords", coordinates[i]);
        console.log("exits", exits);

        this.setState({
          rooms: room,
          lines: exits
        });
      }
      // console.log(links);
    }
  }
  render() {
    console.log("This is Lines", this.state.lines);
    console.log("This is the rooms", this.state.rooms);
    if (!this.state.lines || this.state.rooms) {
      return <div>Loading...</div>;
    }
    return (
      <StyledMap>
        <FlexibleXYPlot width={900} height={800}>
          {this.state.lines.map(link => (
            <LineSeries
              strokeWidth="5"
              color="orangered"
              data={link}
              key={Math.random() * 100}
            />
          ))}
          <MarkSeries
            // current={this.props.currentRoom}
            highlight="none"
            strokeWidth={5}
            opacity="1"
            size="5"
            color="navy"
            data={this.state.rooms}
            style={{ cursor: "pointer" }}
          />
        </FlexibleXYPlot>
      </StyledMap>
    );
  }
}

export default Map;
