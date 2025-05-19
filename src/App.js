import ScrollToTop from "./Components/ScrollTop";
import "./App.css";
import ProtectedRoutes from "./Components/ProtectedRoutes";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Events";
import Gallary from "./Components/Gallary";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Layout from "./Components/Layout";
import CategoryEvent from "./Components/CategoryEvent";
import EventDetails from "./Components/EventDetails";
import UserAccountDetails from "./Components/UserAccountDetails";
import ChangePassword from "./Components/ChangePassword";
import ChangeAccountDetails from "./Components/ChangeAccountDetails";
import Registration from "./Components/Registration";
import MyBooking from "./Components/MyBooking";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Events/:CategoryEvent" element={<CategoryEvent />} />
            <Route path="/EventDetails/:eventId" element={<EventDetails />} />
            <Route path="/MyBooking" element={<MyBooking />} />
            <Route
              path="/UserAccountDetails"
              element={<UserAccountDetails />}
            />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route
              path="/ChangeAccountDetails"
              element={<ChangeAccountDetails />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
