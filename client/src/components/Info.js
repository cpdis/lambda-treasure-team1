import React from "react";
import { Room } from "./Room";
const Info = (list, currentRoom) => {
  console.log("This is the List of Data", Object.values(list[0][0]));
  return (
    <div>
      {list.map(({ room, index }) => {
        return <Room room={room} room_id={currentRoom} />;
      })}
    </div>
  );
};

export default Info;
