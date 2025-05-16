import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userLogo from "../assets/user_logo.png";
import "../Styles/header.css";
import { useEffect, useState } from "react";

function Header() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = JSON.parse(sessionStorage.getItem("user"));
      setUserData(storedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    handleStorageChange();
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <>
      <header className="header">
        <div className="logo-section">
          <Link to="/Home">
            <img src={logo} alt="enevt_management" className="logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/Home">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Gallary">Gallary</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/MyBooking">My Bookings</Link>
          <Link to="/">Login</Link>
        </nav>

        {userData ? (
          <div className="user-profile">
            <Link to="/UserAccountDetails" className="account">
              <img src={userLogo} alt="user_logo" className="user-avtar" />
              <span className="username">Sparks User</span>
            </Link>
          </div>
        ) : (
          <div className="user-profile">
            <Link className="account">
              <img src={userLogo} alt="user_logo" className="user-avtar" />
              <span className="username">Sparks User</span>
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
