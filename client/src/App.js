import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import NavBar from "./components/NavBar";
// import Commands from "./components/Commands";
import Info from "./components/Info";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Map from "./components/Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      api_key: "4bdb7a27f7406988df6fe29ba41a7cab1d609202",
      room: {
        room_id: 0,
        description: "",
        messages: [],
        terrain: "",
        title: "",
        elevation: 0,
        coordinates: "",
        items: [],
        cooldown: 5,
        players: [],
        exits: []
      },
      player: {
        name: "",
        speed: 0,
        strength: 0,
        inventory: [],
        encumbrance: 0,
        messages: [],
        gold: 0
      }
    };
  }

  componentDidMount() {
    const data = {};
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.state.api_key}`
      }
    };

    axios
      .get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, options)
      .then(res => {
        console.log(res.data);
        let room_id = res.data.room_id;
        let exits = res.data.exits;
        let description = res.data.description;
        let items = res.data.items;
        let messages = res.data.messages;
        let terrain = res.data.terrain;
        let title = res.data.title;
        let elevation = res.data.elevation;
        let coordinates = res.data.coordinates;
        let coolDown = res.data.cooldown;
        let players = res.data.players;

        this.setState({
          room: {
            room_id: room_id,
            exits: exits,
            description: description,
            items: items,
            messages: messages,
            terrain: terrain,
            title: title,
            elevation: elevation,
            coordinates: coordinates,
            cooldown: coolDown,
            players: players
          }
        });
      })
      .catch(err => console.log("Error getting initial room data", err));

    setTimeout(() => {
      axios
        .post(
          `https://lambda-treasure-hunt.herokuapp.com/api/adv/status`,
          data,
          options
        )
        .then(res => {
          console.log(res.data);
          let playerName = res.data.name;
          let speed = res.data.speed;
          let strength = res.data.strength;
          let inventory = res.data.inventory;
          let encumbrance = res.data.encumbrance;
          let messages = res.data.messages;
          let gold = res.data.gold;
          this.setState({
            player: {
              name: playerName,
              speed: speed,
              strength: strength,
              inventory: inventory,
              encumbrance: encumbrance,
              messages: messages,
              gold: gold
            }
          });
        })
        .catch(err => console.log("Error getting initial status", err));
    }, this.state.room.cooldown * 1000);
  }

  getStatus = () => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.state.api_key}`
      }
    };

    axios
      .get(`https://lambda-treasure-hunt.herokuapp.com/api/adv/init`, options)
      .then(res => {
        console.log(res.data);
        let room_id = res.data.room_id;
        let exits = res.data.exits;
        let description = res.data.description;
        let items = res.data.items;
        let messages = res.data.messages;
        let terrain = res.data.terrain;
        let title = res.data.title;
        let elevation = res.data.elevation;
        let coordinates = res.data.coordinates;
        let coolDown = res.data.cooldown;
        let players = res.data.players;

        this.setState({
          room: {
            room_id: room_id,
            exits: exits,
            description: description,
            items: items,
            messages: messages,
            terrain: terrain,
            title: title,
            elevation: elevation,
            coordinates: coordinates,
            cooldown: coolDown,
            players: players
          }
        });
      })
      .catch(err => console.log("Error getting initial room data", err));

    setTimeout(() => {
      axios
        .post(
          `https://lambda-treasure-hunt.herokuapp.com/api/adv/status`,
          options
        )
        .then(res => {
          let playerName = res.data.name;
          let speed = res.data.speed;
          let strength = res.data.strength;
          let inventory = res.data.inventory;
          let encumbrance = res.data.encumbrance;
          let messages = res.data.messages;
          let gold = res.data.gold;

          this.setState({
            player: {
              name: playerName,
              speed: speed,
              strength: strength,
              inventory: inventory,
              encumbrance: encumbrance,
              messages: messages,
              gold: gold
            }
          });
        })
        .catch(err => console.log("Error in the status() function", err));
    }, this.state.room.cooldown * 1000);
  };

  move = dir => {
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${this.state.api_key}`
      }
    };
    const body = JSON.stringify({
      direction: dir
    });

    setTimeout(() => {
      axios
        .post(
          "https://lambda-treasure-hunt.herokuapp.com/api/adv/move",
          body,
          options
        )
        .then(res => {
          let room_id = res.data.room_id;
          let exits = res.data.exits;
          let description = res.data.description;
          let items = res.data.items;
          let messages = res.data.messages;
          let terrain = res.data.terrain;
          let title = res.data.title;
          let elevation = res.data.elevation;
          let coordinates = res.data.coordinates;
          let coolDown = res.data.cooldown;

          this.setState({
            room: {
              room_id: room_id,
              exits: exits,
              description: description,
              items: items,
              messages: messages,
              terrain: terrain,
              title: title,
              elevation: elevation,
              coordinates: coordinates,
              cooldown: coolDown
            }
          });
        })
        .catch(err => {
          console.log("Error while moving", err);
        });
    }, this.state.room.cooldown * 1000);

    this.getStatus();
  };

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <NavBar />
        <Map currentRoom={this.state.room.room_id} />
        {/* <Commands move={this.move} getStatus={this.getStatus} /> */}
        <Info player={this.state.player} room={this.state.room} />
      </div>
    );
  }
}

export default withRouter(App);
