import "../Styles/contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="events-harmoni">
        <div className="content">
            <h4>Contact Us Now</h4>
          <h1>Keep in touch</h1>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}

export default Contact;
