import React, { Component } from "react";
import defaultBcg from "../images/defaultBcg.jpg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import Error from "../pages/Error";
import StyledHero from "../components/StyledHero";
import { FaCheck } from "react-icons/fa";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props); //using to see what props we can get
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      // if slug is not equal room slug its return Error page!
      return <Error />;
    }
    const {
      // this are props i use for product page
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    //i giv name for first img as mainImg and pass i to Hero
    //and name rest of images as defaultImg an pass them to map below
    const [mainImg, ...defaultImg] = images;
    return (
      <React.Fragment>
        {/* Passing image to component and set default */}
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms/" className="btn-primary">
              Back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Beds spaces:
                {capacity > 1 ? ` ${capacity} people` : `${capacity} person`}
              </h6>
              <h6>
                Breakfasts:
                {breakfast ? (
                  <span style={{ color: "green" }}> included</span>
                ) : (
                  <span style={{ color: "red" }}> not-included</span>
                )}
              </h6>
              <h6>
                Pets:
                {pets ? (
                  <span style={{ color: "green" }}> allowed</span>
                ) : (
                  <span style={{ color: "red" }}> not-allowed</span>
                )}
              </h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return (
                <li key={index}>
                  <FaCheck style={{ color: "green" }} /> {item}
                </li>
              );
            })}
          </ul>
        </section>
      </React.Fragment>
    );
  }
}
