import ScrollToTop from "./Components/ScrollTop";
import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import CategoryEvent from "./Components/CategoryEvent";
import EventDetails from "./Components/EventDetails";

function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Events/:CategoryEvent" element={<CategoryEvent />} />
            <Route path="/EventDetails/:eventId" element={<EventDetails />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
