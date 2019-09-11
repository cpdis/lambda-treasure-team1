const rooms = './server/graph_data.json';

export const resolvers = {
  Query: {
    rooms: () => rooms
  }
};

