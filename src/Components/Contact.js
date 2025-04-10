import "../Styles/contact.css";
// import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* <div className="events-harmoni">
        <div className="content">
          <h4>Contact Us Now</h4>
          <h1>Keep in touch</h1>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/Contact">Contact</Link>
        </nav>
      </div> */}

      <div className="position-relative w-100 h-100">
        <div className="contact-form">
          <div className="contact-title">
            <div className="contact-logo">
              <i className="fa-solid fa-user-lock"></i>
            </div>
            <h5>Contact Us</h5>
          </div>
          <form>
            <div className="mb-3">
              <label for="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="NameHelp"
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="EmailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
              />
            </div>
            <div className="mb-3">
              <label for="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="phoneNumber"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
