import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="Searching for vacations destination?"
          subtitle="We can offer everything starting from the beach ending with mountain cottage"
        >
          <Link to="/rooms" className="btn-primary">
            Check all rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
}
