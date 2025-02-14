import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
