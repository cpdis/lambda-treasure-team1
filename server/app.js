const treasureHunt = require("./axios_config");
const move = require("./graph");

// Create empty arrays and list to hold map and paths
let traversalPath = [];
let reversePath = [];
let map = {};

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

// Initialize
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
  console.log("It's time to go on an adventure...");

  let room_id = currentRoom.room_id;
  let unexplored_rooms = [];

  // Create a function to move between rooms and pause for cool down
  const toRoom = (current_room_id, target_room_id) => {
    const directions = move(current_room_id, target_room_id);

    directions.forEach(direction => {
      setTimeout(() => {
        treasureHunt.post("move", { direction }).then(res => {
          coolDown = res.data.coolDown;
          currentRoom = res.data;
        });
      }, coolDown * 1000);
    });
  };

  //   Check if the current room is in the map object, and if not, add it
  if (!map[room_id]) {
    map[room_id] = {};
  }

  console.log("The map length is now: ", Object.keys(map).length);

  //   Add unexplored exits to the map with a X
  currentRoom.forEach(exit => {
    if (map[room_id][exit] == undefined) {
      map[room_id][exit] == "X";
    }
  });

  console.log("The map now looks like this:\n", map);

  //   Create array of unexplored rooms
  for (let key in map[room_id]) {
    if (map[room_id][key] == "X") {
      unexplored_rooms.push(key);
    }
  }

  console.log("The remaining unexplored rooms are: ", unexplored_rooms);

  /* 
  The following conditional will handle:
  1. Free movement: there is nothing stopping the explorer from moving to another room
  2. Dead end: the explorer can reverse his/her path until a room has an unexplored exit
  3. Dead end at start: the whole map should have been traversed

  Based on the above, the if statements should have these conditions:
  1. unexplored_rooms > 0
  2. unexplored_rooms == 0 && reversePath.length
  3. unexplored_rooms == 0 && reversePath.length == 0

  TODO: Add in the logic that picks up treasure, etc.
  */

  if (unexplored_rooms > 0) {
    console.log("Free to explore :running-man:");
    //   Pick a room from the unexplored_rooms array
    // Add the next move to the traversalPath array
    // Add the opposite direction move to the reversePath array
    /*
    Use setTimeout and POST('move') to move to the next room

    Add the new room_id to the map
    Add the exits to the map
    Add the opposite direction move to the map
    Change cool down to current room cool down
    */
    // Check if map.length == 500 and if not, loop through adventure() again
  } else if (unexplored_rooms == 0 && reversePath.length) {
    console.log("Dead end :skull-emoji:"); // TODO: Add skull emoji
    // Get last move from reversePath array
    // Add the reversed move to the traversalPath
    // Use setTimeout and POST('move') to move to the reversed room
  } else if (unexplored_rooms == 0 && reversePath.length == 0) {
    console.log(
      "It looks like you've explored the whole map...congratulations! :confetti:\nJust to be sure, the current map length is: ", // TODO: Add confetti emoji
      Object.keys(map).length
    );
    // return map
  }
};

// Run the adventure function (while will continue till map.length==500)
// while waiting the correct amount of time between each move
setTimeout(() => {
  adventure();
}, coolDown * 1000);
