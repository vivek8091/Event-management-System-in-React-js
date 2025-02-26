import { useParams, Link } from "react-router-dom";
import "../Styles/categoryEvent.css";

const catImages = {
  ipl: require("../assets/events/ipl.jpg"),
  mcg: require("../assets/events/mcg.jpg"),
  ahmedabad: require("../assets/events/ahmedabad.webp"),
  cricket: require("../assets/events/cricket.jpg"),
  party: require("../assets/events/party.jpg"),
  cristmas: require("../assets/events/cristmas.jpg"),
  food: require("../assets/events/food.jpg"),
  festival: require("../assets/events/diwali.jpg"),
  concert: require("../assets/events/concert.jpg"),
};

function CategoryEvent() {
  const { CategoryEvent } = useParams();

  const eventData = {
    cricket: [
      {
        id: 1,
        name: "Indian Premier League",
        image: catImages.ipl,
        date: "2025-02-22",
        time: "07:30",
        location: "Wankhade Cricket Stadium, Mumbai",
        price: 599,
      },
      {
        id: 2,
        name: "Women Premier League",
        image: catImages.ahmedabad,
        date: "2025-02-22",
        time: "07:30",
        location: "Narendra Modi Stadium, Ahmedabad",
        price: 599,
      },
      {
        id: 3,
        name: "Gokuldhaam Premier League",
        image: catImages.cricket,
        date: "2025-02-22",
        time: "07:30",
        location: "Gokuldhaam Society, Mumbai",
        price: 599,
      },
      {
        id: 4,
        name: "Big Bash League",
        image: catImages.mcg,
        date: "2025-02-22",
        time: "07:30",
        location: "Melbourne Cricket Ground, Australia",
        price: 599,
      },
    ],
    party: [
      {
        id: 2,
        name: "New Year Party",
        image: catImages.party,
        description: "Celebrate with music & dance.",
      },
    ],
    cristmas: [
      {
        id: 2,
        name: "New Year Party",
        image: catImages.party,
        description: "Celebrate with music & dance.",
      },
    ],
    food: [
      {
        id: 3,
        name: "Food Festival",
        image: catImages.food,
        description: "Try delicious cuisines.",
      },
    ],
    festival: [
      {
        id: 4,
        name: "Diwali Celebration",
        image: catImages.festival,
        description: "Festival of lights.",
      },
    ],
    concert: [
      {
        id: 5,
        name: "Live Rock Concert",
        image: catImages.concert,
        description: "Experience live music.",
      },
    ],
  };

  const events = eventData[CategoryEvent] || [];
  let content;

  if (events.length > 0) {
    content = (
      <div className="row w-100 m-auto mt-2 justify-content-center">
        {events.map((event) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center mb-3">
            <div key={event.id} className="event-item d-flex flex-column h-100 w-100">
              <img src={event.image} alt={event.name} className="event-img" />

              <div className="d-flex flex-column flex-grow-1">
                <div className="bg-black text-white d-flex align-items-center w-100">
                  <p className="date-time">
                    {event.date} , {event.time}
                  </p>
                </div>

                <h5 className="event-name">{event.name}</h5>

                <div className="d-flex align-items-center justify-content-between info">
                  <div className="text-start location">
                    <span className="fw-bold text-muted">Location:</span>
                    <br />
                    <span className="text-danger">{event.location}</span>
                  </div>
                  <div className="fw-bold text-danger">Rs.{event.price}</div>
                </div>

                <div className="mt-auto">
                  <button className="btn btn-warning w-100 fw-bold mt-2">
                    Book Ticket →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    content = <p>No events found for {CategoryEvent}</p>;
  }

  return (
    <>
      <div className="events-harmoni">
        <div className="content">
          <h1>{CategoryEvent.toUpperCase()}</h1>
        </div>

        <nav>
          <Link to="/Events">Events</Link>
          <span>|</span>
          <Link to={`/Events/${CategoryEvent}`}>
            {CategoryEvent.charAt(0).toUpperCase() + CategoryEvent.slice(1)}
          </Link>
        </nav>
      </div>
      <div>{content}</div>
    </>
  );
}

export default CategoryEvent;
