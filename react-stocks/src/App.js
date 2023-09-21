import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./about";
import { Home } from "./home";
import { Stocks } from "./stocks";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
