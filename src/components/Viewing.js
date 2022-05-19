import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
