import { Link } from "react-router-dom";
import "../Styles/gallary.css";

const gallaryImages = {
  gallary1: require("../assets/gallary/gallary1.jpg"),
  gallary2: require("../assets/gallary/gallary2.jpg"),
  gallary3: require("../assets/gallary/gallary3.jpg"),
  gallary4: require("../assets/gallary/gallary4.jpg"),
  gallary5: require("../assets/gallary/gallary5.jpg"),
  gallary6: require("../assets/gallary/gallary6.jpg"),
};

function Gallary() {
  return (
    <>
      <div className="gallary-title">
        <div className="content">
          <h1>Events</h1>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/About">Gallary</Link>
        </nav>
      </div>

      <div className="gallary-data container mt-3">
        <div className="row">
          {Object.values(gallaryImages).map((image, index) => (
            <div key={index} className="col-md-6 col-sm-6 mb-3">
              <div className="image-container">
                {/* Image */}
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="img-fluid"
                />

                {/* Overlay Content */}
                <div className="img-details">
                  <div className="gallary-content">
                    <h6>Hii there</h6>
                    <p>Shello Here...</p>
                  </div>
                  <div className="gallary-icon">
                    <a href="/">
                      {" "}
                      <i class="fa-solid fa-circle-info"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="map mt-3 mb-3 container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.631685220302!2d72.50929727530313!3d23.03729187916351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0xe077cfffcd90ee87!2sSparks%20To%20Ideas%20Provide%20Final%20Year%20Project%20internship%20in%20Php%2CFlutter%2CPython%2CAI%2FML%2CReact%20JS%2CNode%20JS%2CMERN%2CCyber%20Security!5e0!3m2!1sen!2sin!4v1740725458908!5m2!1sen!2sin"
          title="Google Map"
          width="100%"
          height="300"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="offers">
        <div className="tagline">
          <h3>30% Off In June & July For Birthday Events</h3>
        </div>
        <div className="offer-btn">
          <button>Make an Event Now</button>
        </div>
      </div>

      <div className="early-access">
        <h1>Do you want to step into the <br /> future of your upcomming event?</h1>
        <button>Request Early Access</button>
      </div>
    </>
  );
}

export default Gallary;
