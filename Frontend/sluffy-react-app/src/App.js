import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";

//Page Imports
import HomePage from "./pages/HomePage";
import WeatherMap from "./pages/WeatherMap";
import PassType from "./pages/PassType";
import Regions from "./pages/Regions";
import IndependantResorts from "./pages/IndependantResorts";
//Component Imports

import Navbar from "./components/NavBar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weathermap" element={<WeatherMap />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/passtype" element={<PassType />} />
        <Route path="/independantresorts" element={<IndependantResorts />} />
      </Routes>
    </div>
  );
}

export default App;
