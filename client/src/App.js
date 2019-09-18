import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import axios from "axios";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import { CssBaseline } from "@material-ui/core";
import "./App.css";
import Map from "./components/Map";

class App extends Component {
  constructor() {
    super();
    this.state = {
      api_key: "4bdb7a27f7406988df6fe29ba41a7cab1d609202",
      rooms: {},
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
        exits: {}
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
        let room_id = res.data.room_id;
        let exits = res.data.exits;
        let description = res.data.description;
        let items = res.data.items;
        let messages = res.data.messages;
        let terrain = res.data.terrain;
        let title = res.data.title;
        let elevation = res.data.elevation;
        let coordinates = res.data.coordinates;
        let cooldown = res.data.cooldown;
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
            cooldown: cooldown,
            players: players
          }
        });
      })
      .catch(err => console.log("Error getting initial room data", err));

    axios
      .post(
        `https://lambda-treasure-hunt.herokuapp.com/api/adv/status`,
        data,
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
      .catch(err => console.log("Error getting initial status", err));
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <NavBar />
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Map />
      </div>
    );
  }
}

export default withRouter(App);
