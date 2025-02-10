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
        <div className="hero-container">
          <div className="row">
            <div className="columns33">
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

            <div class="columns22">
              <form action="" class="email-form">
                <div class="sign-up-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>

            <div className="columns11">
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
    </>
  );
}

export default Home;
