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

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="container">
//         <div id="animate" />
//         <Routes>
//           <Viewing />
//           <Navigation />
//           {/* <Main /> */}
//           {/* <About /> */}
//           {/* <MainHeader /> */}
//           {/* <MainCornButton /> */}
//           {/* <MainCarousel /> */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

export default App;
