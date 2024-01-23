import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Dropdown.css";
import { Link } from "react-router-dom";
import IndependantPasses from "../pages/IndependantResorts";
import IkonPass from "../pages/IkonPass";
import EpicPass from "../pages/EpicPass";

function Dropdown() {
  const [click, setClick] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Home"); // Default selected option

  const handleClick = () => setClick(!click);

  const handleOptionClick = (option) => {
    setClick(false);
    setSelectedOption(option);
  };

  const renderComponent = () => {
    switch (selectedOption) {
      case "Independent Resorts":
        return <IndependantPasses />;
      case "Ikon Pass":
        return <IkonPass />;
      case "Epic Pass":
        return <EpicPass />;
      // case "Regions":
      //   return <Regions />;
      // case "Weather Map":
      //   return <WeatherMap />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-button" onClick={handleClick}>
          {selectedOption}
        </div>
        <ul className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => handleOptionClick(item.title)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Render the corresponding component based on the selected option */}
      {renderComponent()}
    </>
  );
}

export default Dropdown;
