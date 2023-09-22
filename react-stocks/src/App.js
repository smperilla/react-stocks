import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Stocks from "./components/stocks";
import Nav from "./components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Home />} />
    <Route path="/stocks" element={<Stocks />} />
    <Route path="/stock/:symbol" element={<Stocks />} />

      </Routes>
    </div>
  );
}

export default App;
