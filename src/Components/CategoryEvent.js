import { useParams, Link, useNavigate } from "react-router-dom";
import "../Styles/categoryEvent.css";

export const catImages = {
  ipl: require("../assets/events/ipl.jpg"),
  mcg: require("../assets/events/mcg.jpg"),
  ahmedabad: require("../assets/events/ahmedabad.webp"),
  cricket: require("../assets/events/cricket.jpg"),
  party: require("../assets/events/newYear.jpg"),
  festivals: require("../assets/events/cristmas2.jpg"),
  food: require("../assets/events/food.jpg"),
  celebrations: require("../assets/events/diwali.jpg"),
  concert: require("../assets/events/concert.jpg"),
};

export const eventData = {
  cricket: [
    {
      id: 101,
      name: "Indian Premier League",
      image: catImages.ipl,
      date: "2025-02-22",
      time: "07:30",
      location: "Wankhade Cricket Stadium, Mumbai",
      price: 599,
    },
    {
      id: 102,
      name: "Women Premier League",
      image: catImages.ahmedabad,
      date: "2025-02-22",
      time: "07:30",
      location: "Narendra Modi Stadium, Ahmedabad",
      price: 599,
    },
    {
      id: 103,
      name: "Gokuldhaam Premier League",
      image: catImages.cricket,
      date: "2025-02-22",
      time: "07:30",
      location: "Gokuldhaam Society, Mumbai",
      price: 599,
    },
    {
      id: 104,
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
      id: 201,
      name: "New Year Party",
      image: catImages.party,
      date: "2025-02-22",
      time: "07:30",
      location: "Melbourne Cricket Ground, Australia",
      price: 599,
    },
  ],
  festivals: [
    {
      id: 301,
      name: "Cristmas",
      image: catImages.festivals,
      date: "2025-02-22",
      time: "07:30",
      location: "Melbourne Cricket Ground, Australia",
      price: 599,
    },
  ],
  food: [
    {
      id: 401,
      name: "McDonalds",
      image: catImages.food,
      location: "Ahmedabad",
    },
  ],
  celebrations: [
    {
      id: 501,
      name: "Diwali Celebration",
      image: catImages.celebrations,
      description: "Festival of lights.",
      city: "botad",
    },
  ],
  concert: [
    {
      id: 601,
      name: "New Year Party",
      image: catImages.concert,
      date: "2025-02-22",
      time: "07:30",
      location: "Melbourne Cricket Ground, Australia",
      price: 599,
    },
  ],
};


function CategoryEvent() {
  const { CategoryEvent } = useParams();
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/EventDetails/${eventId}`);
  };

  const events = eventData[CategoryEvent] || [];
  let content;

  if (events.length > 0) {
    content = (
      <div className="row w-100 m-auto mt-2 justify-content-start">
        {events.map((event) => (
          <div
            key={event.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center mb-3"
            onClick={() => handleEventClick(event.id)}
          >
            <div className="event-item">
              {event.image && (
                <img src={event.image} alt={event.name} className="event-img" />
              )}

              <div className="d-flex flex-column flex-grow-1">
                <div className="bg-black text-white d-flex align-items-center w-100">
                  {event.date && event.time && (
                    <p className="date-time">
                      {event.date} , {event.time}
                    </p>
                  )}
                </div>

                {event.name && <h5 className="event-name">{event.name}</h5>}

                <div className="d-flex align-items-center justify-content-between info">
                  {event.location && (
                    <div className="text-start location">
                      <span className="fw-bold text-muted">Location:</span>
                      <br />
                      <span className="text-danger">{event.location}</span>
                    </div>
                  )}
                  {event.price && (
                    <div className="fw-bold text-danger">Rs.{event.price}</div>
                  )}
                </div>

                {/* {Object.entries(event).map(([key, value]) => { // This code is to get all available key values pairs and prine them
                  if (["id", "name", "image"].includes(key)) return null; // Skip unwanted fields
                  return (
                    <div key={key} className="text-start">
                      <span className="fw-bold text-muted">
                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                      </span>
                      <br />
                      <span className="text-primary">{value}</span>
                    </div>
                  );
                })} */}

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
