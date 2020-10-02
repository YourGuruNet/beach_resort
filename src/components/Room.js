import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/default-room.jpg";
import PropTypes from "prop-types";

export default function Room({ room }) {
  //console.log(room) use to see what props we can get!
  const { name, images, price, slug } = room; // we destructors value so we don't need anymore to use room.name for example but just name!
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="room" />
        {/*Us || to set default img */}
        <div className="price-top">
          <h6>${price}</h6>
          <p>One night</p>
        </div>
        <Link to={`/room/${slug}`} className="btn-primary room-link">
          {/* slug is our path to exact room wee click */}
          {name}
        </Link>
      </div>
    </article>
  );
}


//This propTypes make required to use given prop otherwise its don't work
// when you insert new room!!!!
Room.propTypes = {
    room:PropTypes.shape({
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        slug:PropTypes.string.isRequired,
    })
}