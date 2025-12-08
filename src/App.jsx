import "./App.css";
import "./Global.css";
import { Header } from "./components//header/Header";
import { Search } from "./components/search/Search";
import { CurrentCity } from "./components/currentCity/CurrentCityForecast";

export default function App() {
  return (
    <>
      <Header />
      <Search />
      <CurrentCity />
    </>
  );
}
