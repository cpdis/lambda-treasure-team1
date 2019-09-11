const typeDefs = `
  enum Error {
      String
  }
  
  enum Message {
      String
  }
  
  enum Exit {
      String
  }
  
  enum Item {
      String
  }
  
  enum Status {
      String
  }
  
  type Query {
    rooms: [Room]
  }
  
  type Player {
      name: String!
      cooldown: Float!
      encumbrance: Int!
      strength: Int!
      speed: Int!
      gold: Int!
      inventory: [Item!]
      status: [Status!]
      errors: [Error]
      messages: [Message]
  }
  
  type Room {
      room_id: Int
      title: String!
      description: String!
      coordinates: String!
      elevation: Int!
      terrain: String!
      players: [Player!]
      items: [Item!]
      exits: [Exit]
      cooldown: Int!
      errors: [Error]
      messages: [Message]
  }
`
;

module.exports = { typeDefs };