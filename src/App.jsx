import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import Project from "./component/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen-full w-full bg-gradient-to-b from-sky-100 to-sky-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
