import "./App.css";
import Navigation from "./components/Navigation";
import Views from "./components/Views";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { Component } from "react";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Views />
    </React.Fragment>
  );
}

export default App;
