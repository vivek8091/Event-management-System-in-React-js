import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import userLogo from "../assets/user_logo.png";
import "../Styles/header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="enevt_management" className="logo" />
      </Link>

      <nav className="nav-links">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Events</Link>
        <Link>Gallary</Link>
        <Link>Contact</Link>
      </nav>

      <div className="user-profile">
        <Link className="account">
          <img src={userLogo} alt="user_logo" className="user-avtar" />
          <span className="username">Sparks User</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
