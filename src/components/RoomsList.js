import React from "react";
import Room from "./Room";
import { FaSistrix } from "react-icons/fa";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>
          <FaSistrix /> &nbsp; There are no rooms matching your parameters
        </h3>
      </div>
    );
  }
  return (
    <section className="featured-rooms">
      <div className="featured-rooms-center">
        {rooms.map((room) => {
          return <Room key={room.id} room={room} />; // passing props we use in Room.js
        })}
      </div>
    </section>
  );
};
export default RoomsList;
