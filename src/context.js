import React, { Component } from "react";
//import items from "./data"; this was for local data
import Client from "./Contenful";

//test for props i get from contekstful
/*Client.getEntries({ content_type: "beachresortapi" }).then((response) =>
  console.log(response.items)
);*/

const RoomContext = React.createContext();
//<RoomContext.Provider value =

class RoomProvider extends Component {
  state = {
    rooms: [], //all info about rooms
    sortedRooms: [], // this well bee values of sorted projects
    featuredRooms: [], // this well be place holder for featured room section
    loading: true, //this state is for loading gift
    type: "all", // default value for sorted rooms
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };
  //get data from contentful
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachresortapi",
      });
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true); // this goes through all rooms and checks for featured === true value
      let maxPrice = Math.max(...rooms.map((item) => item.price)); // change default value for my filter
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        size: maxSize,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }
  //end of get data from contextfull
  //i format data.js in useful dates and get from data.js - id, img
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map(
        (
          image // we make map because there are many pictures inside
        ) => image.fields.file.url
      );

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  // This function goes through rooms slug or id and returns rooms data with the same slug
  //i pass it to RoomContext.Provider so i can use it anywhere
  getRoom = (slug) => {
    let temRooms = [...this.state.rooms];
    const room = temRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  // filter function firs i set new value holders
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    //all the rooms
    let tempRooms = [...rooms];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);
    //filtered by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    // filtered by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    // filtered by price
    tempRooms = tempRooms.filter((room) => room.price <= price);
    // filtered by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // filter by breakfast
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    //change state for filter
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

//This is for Room Container one of wheys how to pass values
/*export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}*/

export { RoomProvider, RoomConsumer, RoomContext };

// {this.props.children}  gives us to ability to insert different elements ass a props for example (<h1>Hello World!</h1>)
// value for props.children can be text inside "" ore as on our example it is a object
/*<ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCard: this.addToCart,
          openModal:this.openModal,
          closeModal:this.closeModal,
        }}
      > //This is a way how to pass props to another page ore element.*/

/*RoomConsumer =  render() {
    return <RoomContext.Provider value="hello">
        {this.props.children}
    </RoomContext.Provider>;
  }*/
//<RoomContext.Provider value={{...this.state }}> this alow me to pass all object named state to one component
