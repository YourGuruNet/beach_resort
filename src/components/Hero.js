import React from "react";

// Hero component let me change the class name for heder
// and also for heder children in any component by passing props to component
//this is the way how i creat differs banners with same style in every page
export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}
Hero.defaultProps = {
  hero: "defaultHero",
};
