import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userLogo from "../assets/user_logo.png";
import "../Styles/header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} alt="enevt_management" className="logo" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Events">Events</Link>
          <Link to="/Gallary">Gallary</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Login">Login</Link>
        </nav>

        <div className="user-profile">
          <Link to="/UserAccountDetails" className="account">
            <img src={userLogo} alt="user_logo" className="user-avtar" />
            <span className="username">Sparks User</span>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
