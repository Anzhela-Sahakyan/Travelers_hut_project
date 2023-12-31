import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Video from "./Components/Video/Video";
import PhotoGallery from "./Components/PhotoGallery/PhotoGallery";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Video />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;
