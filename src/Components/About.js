import "../Styles/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about-harmoni">
        <div className="content">
          <p>All you need to</p>
          <p>Know</p>
          <h1>About</h1>
          <h2>Harmoni</h2>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/About">About Us</Link>
        </nav>
      </div>

      <div className="about-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="about-title">
                <p>We are harmoni</p>
                <h4>
                  No.1 Event <br /> Management
                </h4>
                <p>Get Started!</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="our-mission">
                <h3>
                  Our Mission <span className="underline"></span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, quos aliquid beatae modi quidem voluptatum.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  accusamus animi eligendi voluptatum ducimus temporibus!
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="our-vision">
                <h3>
                  Our Vision <span className="underline"></span>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis, quos aliquid beatae modi quidem voluptatum.
                </p>

                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                  accusamus animi eligendi voluptatum ducimus temporibus!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
