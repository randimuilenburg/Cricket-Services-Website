import "./App.css";
import Navigation from "./components/Navigation";
import Viewing from "./components/Viewing";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { Component } from "react";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Viewing />
    </React.Fragment>
  );
}

export default App;
