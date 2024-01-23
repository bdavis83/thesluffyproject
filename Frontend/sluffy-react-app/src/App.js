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
import DisplayForecastPage from "./pages/DisplayForecastPage";
import EpicPass from "./pages/EpicPass";
import IkonPass from "./pages/IkonPass";
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
        <Route path="/epic-pass" element={<EpicPass />} />
        <Route path="/ikon-pass" element={<IkonPass />} />
        <Route path="forecast/:resortId" element={<DisplayForecastPage />} />
      </Routes>
    </div>
  );
}

export default App;
