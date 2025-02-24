import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CategoryEvent from "./Components/categoryEvent";
// import ScrollTop from "../src/Components/ScrollTop";
import ScrollToTop from "../src/Components/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Gallary" element={<Gallary />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/Events/:CategoryEvent" element={< CategoryEvent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
