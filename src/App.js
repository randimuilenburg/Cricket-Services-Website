import "./App.css";
// import React from "react";
import Navigation from "./components/Navbar";
import MainHeader from "./components/MainHeader";
import MainCarousel from "./components/MainCarousel";
import MainCornButton from "./components/MainCornButton";
import About from "./components/About";
// import CarouselToggle from "./components/CarouselToggle";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Component } from "react";

function App() {
  return (
    <div className="container">
      <div id="animate" />
      <Navigation />
      {/* <About /> */}
      <MainHeader />
      <MainCornButton />
      <MainCarousel />
    </div>
  );
}

export default App;
