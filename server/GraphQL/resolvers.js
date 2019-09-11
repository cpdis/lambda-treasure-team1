const rooms = './server/graph_data.js';
const { arr } = require('../graph_data');

const resolvers = {
  Query: {
    rooms: () => arr
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