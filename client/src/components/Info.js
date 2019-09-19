import React, { Component } from "react";

export class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
          textAlign: "left"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            paddingLeft: "20px"
          }}
        >
          <h2>Room Information</h2>
          <div>
            <strong>Current Room: </strong>
            <span>{this.props.room.room_id}</span>
          </div>
          <div>
            <strong>Description: </strong>
            <span>{this.props.room.description}</span>
          </div>
          <div>
            <strong>Exits:</strong>
            {this.props.room.exits.length < 1 ? (
              <p>There are no exits.</p>
            ) : (
              <ul>
                {this.props.room.exits.map(exit => (
                  <li>{exit}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <strong>Terrain: </strong>
            <span>{this.props.room.terrain}</span>
          </div>
          <span>
            <strong>Elevation: </strong>
            <span>{this.props.room.elevation}</span>
          </span>
          <div>
            <strong>Current Cooldown: </strong>
            <span>{this.props.room.cooldown}</span>
          </div>
          <div>
            <strong>Items:</strong>
            {this.props.room.items.length < 1 ? (
              <p>There are no items here.</p>
            ) : (
              <ul>
                {this.props.room.items.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <strong>Players:</strong>
            {this.props.room.players.length < 1 ? (
              <p>There are no other people here.</p>
            ) : (
              <ul>
                {this.props.room.players.map(person => (
                  <li>{person}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            paddingLeft: "20px"
          }}
        >
          <h2>Player Information</h2>
          <div>
            <strong>Name: </strong>
            <span>{this.props.player.name}</span>
          </div>
          <div>
            <strong>Speed: </strong>
            <span>{this.props.player.speed}</span>
          </div>
          <div>
            <strong>Strength: </strong>
            <span>{this.props.player.strength}</span>
          </div>
          <span>
            <strong>Inventory: </strong>
            {this.props.player.inventory < 1 ? (
              <p>There is nothing in your inventory.</p>
            ) : (
              <ul>
                {this.props.player.inventory.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
            )}
          </span>
          <div>
            <strong>Encumberance: </strong>
            <span>{this.props.player.encumbrance}</span>
          </div>
          <div>
            <strong>Gold: </strong>
            <span>{this.props.player.gold}</span>
          </div>
          <div>
            <strong>Messages:</strong>
            {this.props.player.messages < 1 ? (
              <p>There are no messages.</p>
            ) : (
              <ul>
                {this.props.player.messages.map(message => (
                  <li>{message}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Info;

// room: {
//   room_id: 0,
//   description: "",
//   messages: [],
//   terrain: "",
//   title: "",
//   elevation: 0,
//   coordinates: "",
//   items: [],
//   cooldown: 5,
//   players: [],
//   exits: {}
// },
// player: {
//   name: "",
//   speed: 0,
//   strength: 0,
//   inventory: [],
//   encumbrance: 0,
//   messages: [],
//   gold: 0
// }
