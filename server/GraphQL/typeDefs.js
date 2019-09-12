const typeDefs = `
  type Query {
    rooms: [Room]
  }
  
  type Player {
      name: String
      cooldown: Float
      encumbrance: Int
      strength: Int
      speed: Int
      gold: Int
      inventory: [String]
      status: [String]
      errors: [String]
      messages: [String]
  }
  
  type Room {
      room_id: Int
      title: String!
      description: String!
      coordinates: String!
      elevation: Int!
      terrain: String!
      players: [Player!]
      items: [String]
      exits: [String]
      cooldown: Int!
      errors: [String]
      messages: [String]
  }
`
;

module.exports = { typeDefs };