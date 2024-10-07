import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Navbar from "./components/Navbar";
import Services from "./pages/service/Services";
import Franchise from "./pages/franchise/Franchise";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <Navbar></Navbar>
        <div className="mx-0 sm:mx-[2%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
           
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
