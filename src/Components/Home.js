import "../Styles/home.css";
import Header from "./Header";
import hero from "../assets/hero-background.jpg";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import user6 from "../assets/user6.jpg";

function Home() {
  return (
    <>
      <Header />
      <div className="hero">
        <img src={hero} alt="hero-background" className="hero-back" />
        <div className="hero-container container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-sm-10 col-12">
              <h1>
                One Stop Event <br /> Planet
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi maiores culpa ea iure maxime ullam nulla eum! Illo,
                quia. Dolor in possimus necessitatibus doloremque sapiente est,
                quaerat molestiae! Quisquam, dolorum.
                <br />
                <span> Every event should be perfact.</span>
              </p>
            </div>

            <div class="col-lg-5">
              <form action="" class="email-form">
                <div class="sign-up-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>

            <div className="col-lg-6">
              <div className="profile-stack">
                <div className="profile-images">
                  <img src={user1} alt="user1" className="profile-img" />
                  <img src={user2} alt="user2" className="profile-img" />
                  <img src={user3} alt="user3" className="profile-img" />
                  <img src={user4} alt="user4" className="profile-img" />
                  <img src={user5} alt="user5" className="profile-img" />
                  <img src={user6} alt="user6" className="profile-img" />
                  <span className="profile-count">1.6K+</span>
                  <span className="request-text">
                    <strong>1,600</strong> people requested access a visit in
                    the last 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="home-info">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h5 className="info-title">
                What is Harmoni <br /> Event
              </h5>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="info-detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur voluptas expedita vero optio alias velit itaque aut
                aliquam minima asperiores, quaerat doloremque et provident
                doloribus.
              </p>
            </div>
          </div>

          <br />
          <br />

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <h3 className="info-lable">
                Your Event Will Be Beyond Your <br /> Imagination
              </h3>
            </div>
            <div className="col-lg-6 col-md-6">
              <p className="info-direction">Expore the Library</p>
            </div>
          </div>

          <br />
          <br />

          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="services">
                <p className="service-title">Chatbots</p>
                <p className="service-details">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam, recusandae?
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="services">
                <p className="service-title">Knowledge Base</p>
                <p className="service-details">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam, recusandae?
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="services">
                <p className="service-title">Education</p>
                <p className="service-details">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam, recusandae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="event-title">
                <p className="event-tagline">
                  Harmony Event Management Firm & Wedding Planner is a group of
                  creatice minds who would like to make weddings, birthday & any
                  kind of events courteous and a better place for our clients to
                  celibrate their important moments of lives...
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="event-list">
                <ul>
                  <li>Photography</li>
                  <li>
                    Cinematography or <br /> Videography Service
                  </li>
                  <li>
                    Full Venue Decoration <br /> Service
                  </li>
                  <li>Home Decoration</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="event-details">
                <ul>
                  <li>
                    A team of three telented photographers are ready to snap the
                    bet moments of you ceremony
                  </li>
                  <li>
                    Creative full HD 1080p video. A different space of yoour
                    ceremony
                  </li>
                  <li>
                    A blend of out-of-the box ideas to decore your precious date
                  </li>
                  <li>
                    Just call us and get total event solution under one roof
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-7 col-md-10 col-sm-10 col-12 m-auto">
            <div className="register">
              <div className="register-content">
                <p>Request Early Access To Get Started</p>
                <h6>
                  Register Today & Start Exploring The Endless <br /> Possibilities
                </h6>
              </div>
              <div className="start-btn">
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
