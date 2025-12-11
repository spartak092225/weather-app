import "./App.css";
import "./Global.css";
import { useState } from "react";
import { Header } from "./components//header/Header";
import { Search } from "./components/search/Search";
import { CurrentCity } from "./components/currentCity/CurrentCityForecast";

export default function App() {
  const [location, setLocation] = useState({
    latitude: 52.52,
    longitude: 13.41,
    name: "Berlin",
  });

  const [units, setUnits] = useState({
    temperature: "celsius",
    wind: "kmh",
    precipitation: "mm",
  });
  return (
    <>
      <Header units={units} setUnits={setUnits} />
      <Search setLocation={setLocation} />
      <CurrentCity location={location} units={units} />
    </>
  );
}
