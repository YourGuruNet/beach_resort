import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
export default function Rooms() {
  return (
    <React.Fragment>
      <Hero hero="roomsHero">
        <Banner
          title="Single or Double?"
          subtitle="We can offer best deals for your holiday"
        >
          <Link to="/" className="btn-primary">
            Back to homepage
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </React.Fragment>
  );
}
