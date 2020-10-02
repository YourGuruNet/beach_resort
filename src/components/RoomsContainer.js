import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {(value) => { //I take values from consumer and giv them new names and pass them to components
        const { loading, sortedRooms, rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <React.Fragment>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </React.Fragment>
        );
      }}
    </RoomConsumer>
  );
}

/*import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

function RoomContainer({context}) {
    const { loading, sortingRooms, rooms } = context;
    if (loading) {
        return <Loading />;
      }
      return (
        <div>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortingRooms} />
        </div>
      );
    }


export default withRoomConsumer(RoomContainer)*/
