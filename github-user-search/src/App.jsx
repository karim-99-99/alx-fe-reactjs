import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Service from "./components/Service";
import Search from "./components/Search";
function App() {
  return (
    <div>
      <Search />
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
    </div>
  
  );
}

export default App;
