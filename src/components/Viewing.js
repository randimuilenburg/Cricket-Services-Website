import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Booking from "./Booking";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
