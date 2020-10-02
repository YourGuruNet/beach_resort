import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// I use react  router tho swish between pages!
// don't forget to insert <Router> tag at index.js page
//<Route path="/room/:slug" component={SingleRoom} /> =>
// => this setup let me specifics different page for the route
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/room/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
