import "./App.css";
// import React from "react";
import Navigation from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import MainCarousel from "./components/MainCarousel";
import MainCornButton from "./components/MainCornButton";
// import CarouselToggle from "./components/CarouselToggle";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navigation />
      <MainHeader />
      <MainCornButton />
      <MainCarousel />

      {/* <CarouselToggle /> */}
    </div>
  );
}

export default App;
