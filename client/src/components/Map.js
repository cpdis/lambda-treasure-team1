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
    links: [],
    coordinates: []
  };
  componentDidMount() {
    // Create arrays to hold point coordinates and links
    const coordinates = [];
    const links = [];

    // Loop through each room in the room_data object

    for (let room in room_data) {
      let data = room_data[room]; // graph data
      coordinates.push(data);

      //get the adjacent rooms x and y coordinates and display that data
      for (let adjacentRoom in map_data[room]) {
        links.push([room_data[room], room_data[map_data[room][adjacentRoom]]]);
      }
    }
    this.setState({
      coordinates,
      links
    });
  }
  render() {
    const { coordinates, links } = this.state;
    // if links and coordinates empty load show that its loading
    if (!links.length && !coordinates.length) {
      return <div>Loading...</div>;
    }
    return (
      <StyledMap>
        <FlexibleXYPlot width={900} height={800}>
          {/* To display the lines on the map to the next plot point */}
          {links.map(link => (
            <LineSeries
              strokeWidth="5"
              color="orangered"
              data={link}
              key={Math.random() * 100}
            />
          ))}
          {/* Plot the points for the room */}
          <MarkSeries
            current={this.props.currentRoom}
            highlight="none"
            strokeWidth={5}
            opacity="1"
            size="5"
            color="navy"
            data={coordinates}
            style={{ cursor: "pointer" }}
          />
        </FlexibleXYPlot>
      </StyledMap>
    );
  }
}

export default Map;
