const treasureHunt = require("./axios_config");
const move = require("./graph");
const getLastProof = require("./blockchain");
// var fs = require("fs");

// Create empty arrays and list to hold map and paths
let traversalPath = [];
let reversePath = [];
let map = {};
let graph = {};
let name_changed = false;

// Create a variable for the current room
let currentRoom = null;
let coolDown = 16; // To account for the 15 second cool down period

// Create a helper function to reverse the N, S, E, W direction
const reverse = direction => {
  let result = "";

  if (direction == "n") {
    result = "s";
  } else if (direction == "s") {
    result = "n";
  } else if (direction == "w") {
    result = "e";
  } else if (direction == "e") {
    result = "w";
  }

  return result;
};

// Initialize: this will just return the first room (room_id = 0)
treasureHunt
  .get("init")
  .then(res => {
    console.log("init: ", res.data);

    // Set the current_room to res.data
    currentRoom = res.data;

    // Print out the current room ID and the exits
    console.log("Room ID: ", currentRoom.room_id);
    console.log("Room exits: ", currentRoom.exits);

    // Set the cool down period to whatever it is in the current room
    coolDown = currentRoom.cooldown;
  })
  .catch(err => console.error(err));

// This function will hold all of the actual logic for moving through
// the map, picking things up, selling things, etc. and should continue
// until map.length==500
adventure = () => {
  let room_ID = currentRoom.room_id;
  // let unexplored_rooms = [];

  console.log("Currently in room:", currentRoom.room_id);
  // console.log("with:", currentRoom.items);

  if (room_ID === 250) {
    getLastProof();
  }
};

// Run the adventure function (while will continue till map.length==500)
// while waiting the correct amount of time between each move
setTimeout(() => {
  adventure();
}, coolDown * 1000);
