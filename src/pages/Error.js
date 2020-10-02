import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export default function Error() {
  return (
    <Hero>
      <Banner title="404" subtitle="This page does not exist">
        <Link to="/" className="btn-primary">
          Back to homepage
        </Link>
      </Banner>
    </Hero>
  );
}
