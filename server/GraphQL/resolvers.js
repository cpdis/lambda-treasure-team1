const { arr, graph_array_data } = require('./graph_data.js');
// const myData  = require('./room_data.js');
importmyData from "./room_data";
const resolvers = {

  Query: {
    rooms: () => myData
  },
  Room: {
    room_id: (parent) => parent.room_id,
    title: (parent) => parent.title,
    description: (parent) => parent.description,
    coordinates: (parent) => parent.coordinates,
    elevation: (parent) => parent.elevation,
    terrain: (parent) => parent.terrain,
    players: (parent) => parent.players,
    items: (parent) => parent.items,
    exits: (parent) => parent.exits,
    cooldown: (parent) => parent.cooldown,
    errors: (parent) => parent.errors,
    messages: (parent) => parent.messages,
  }
};


module.exports = { resolvers };