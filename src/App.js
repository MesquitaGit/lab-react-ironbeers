import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import ListBeers from "./components/ListBeers";
import BeerDetail from "./components/BeerDetail";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:beerId" element={<BeerDetail />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;
