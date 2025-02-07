import Header from "./Header";
import hero from "../assets/hero-background.jpg";
import "../Styles/home.css";

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

            <div class="columns">
              <form action="" class="email-form">
                <div class="sign-up-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
