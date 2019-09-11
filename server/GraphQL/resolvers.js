const rooms = './server/graph_data.json';

const resolvers = {
  Query: {
    rooms: () => rooms
  }
};


module.exports = { resolvers };