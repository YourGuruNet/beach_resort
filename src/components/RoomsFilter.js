import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext); // I give all Room context values to context and now I can use them
  // console.log(context)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context; // now all this values are available to context.

  // filter for rooms type
  // get unique types
  let types = getUnique(rooms, "type");
  //add them all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  //Filter by bed count
  let peoples = getUnique(rooms, "capacity");
  peoples = peoples.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <React.Fragment>
      <section className="filter-container">
        <Title title="Search Your Rooms" />
        <form className="filter-form">
          {/*select type*/}
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select
              name="type"
              id="type"
              value={type}
              className="form-control"
              onChange={handleChange}
            >
              {/* value={} is for getting props */}
              {types}
            </select>
          </div>
          {/* end of select type */}
          {/*gusts */}
          <div className="form-group">
            <label htmlFor="capacity">Bed space</label>
            <select
              name="capacity"
              id="capacity"
              value={capacity}
              className="form-control"
              onChange={handleChange}
            >
              {/* value={} is for getting props */}
              {peoples}
            </select>
          </div>
          {/* end of guest */}
          {/* filtered by price */}
          <div className="form-group">
            <label htmlFor="price">Room price ${price}</label>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              id="price"
              value={price}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          {/* end of filtered by price */}
          {/* filtered by size */}
          <div className="form-group">
            <label htmlFor="size">Room size</label>
            <div className="size-inputs">
              <input
                type="number"
                name="minSize"
                id="size"
                value={minSize}
                onChange={handleChange}
                className="size-input form-control"
              />
              <input
                type="number"
                name="maxSize"
                id="size"
                value={maxSize}
                onChange={handleChange}
                className="size-input form-control"
              />
            </div>
          </div>
          {/* end of filtered by size */}
          {/* filtered by extrae */}
          <div className="form-group">
            <div className="single-extra ">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={handleChange}
              />
              <label htmlFor="Breakfast">Breakfast included</label>
            </div>
            <div className="single-extra">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={handleChange}
              />
              <label htmlFor="pets">Pets allowed</label>
            </div>
          </div>
          {/* end of filtered by extras */}
        </form>
      </section>
    </React.Fragment>
  );
}
