import React from "react";
import "./App.css";
import { ExploreTopBooks } from "./layouts/HomePage/ExploreTopBooks";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Carousel } from "./layouts/HomePage/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
    </>
  );
}

export default App;
