import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, About, Contact, Coding, Projects } from "./pages";

const App = () => {
  return (
    <Router>
      <main className="bg-slate-300/20">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<About />} />
          <Route path="/p" element={<Projects />} />
          <Route path="/c" element={<Coding />} />
          <Route path="/cc" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
