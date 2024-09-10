import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Preload from "./components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import Particle from "./components/Particle";

function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(!load);
    }, 2000)
    return () => clearTimeout(timer);
  },[])
  return (
    <Router>
      <Preload load={load} />
        <NavBar />
        <Particle />
        <div className="container py-20 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;
