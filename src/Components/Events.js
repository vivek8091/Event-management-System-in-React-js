import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/events.css";

const catImages = {
  cricket: require("../assets/events/cricket.jpg"),
  party: require("../assets/events/party.jpg"),
  cristmas: require("../assets/events/cristmas.jpg"),
  food: require("../assets/events/food.jpg"),
  festival: require("../assets/events/diwali.jpg"),
  concert: require("../assets/events/concert.jpg"),
};

function Events() {

    const navigate = useNavigate();

    const handleCategoryClick = (CategoryEvent) => {
        navigate(`/Events/${CategoryEvent}`);
    }
  return (
    <>
      <Header />
      <div className="events-harmoni">
        <div className="content">
          <h1>Events</h1>
        </div>

        <nav>
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/About">Events</Link>
        </nav>
      </div>

      <div className="events-cat">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 m-auto">
            <div className="category" onClick={() => handleCategoryClick("cricket")}>
              <div className="cat-img">
                <img
                  src={catImages.cricket}
                  alt="cricket"
                  className="img-fluid"
                />
              </div>
              <div className="cat-name">
                <p>Cricket</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 m-auto">
            <div className="category" onClick={() => handleCategoryClick("party")}>
              <div className="cat-img">
                <img
                  src={catImages.party}
                  alt="cricket"
                  className="img-fluid"
                />
              </div>
              <div className="cat-name">
                <p>Office Party</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 m-auto">
            <div className="category" onClick={() => handleCategoryClick("cristmas")}>
              <div className="cat-img">
                <img
                  src={catImages.cristmas}
                  alt="cricket"
                  className="img-fluid"
                />
              </div>
              <div className="cat-name">
                <p>Cristmas</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 m-auto">
            <div className="category" onClick={() => handleCategoryClick("food")}>
              <div className="cat-img">
                <img src={catImages.food} alt="cricket" className="img-fluid" />
              </div>
              <div className="cat-name">
                <p>Food Zone</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 m-auto">
            <div className="category" onClick={() => handleCategoryClick("festival")}>
              <div className="cat-img">
                <img
                  src={catImages.festival}
                  alt="cricket"
                  className="img-fluid"
                />
              </div>
              <div className="cat-name">
                <p>Festivals</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 m-auto">
            <div className="category" onClick={() => handleCategoryClick("concert")}>
              <div className="cat-img">
                <img
                  src={catImages.concert}
                  alt="cricket"
                  className="img-fluid"
                />
              </div>
              <div className="cat-name">
                <p>Concert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
