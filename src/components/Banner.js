import React from "react";

// Banner is Hero components child component let me change the class name for heder
// and also for heder children in any component by passing props to component
//this is the way how i creat differs banners with same style in every page
export default function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
