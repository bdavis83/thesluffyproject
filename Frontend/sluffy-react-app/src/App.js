import { Routes, Route } from "react-router-dom";
import "./App.css";

//Page Imports
import HomePage from "./pages/HomePage";
import WeatherMap from "./pages/WeatherMap";
import Passes from "./pages/Passes";
import Regions from "./pages/Regions";
import IndependantResorts from "./pages/IndependantResorts";
//Component Imports

import Navbar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weathermap" element={<WeatherMap />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/passes" element={<Passes />} />
        <Route path="/independantresorts" element={<IndependantResorts />} />
      </Routes>
    </div>
  );
}

export default App;
