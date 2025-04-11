import {
  useParams,
  Link,
  useNavigate,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import "../Styles/categoryEvent.css";
import axios from "axios";

// export const catImages = {
//   ipl: require("../assets/events/ipl.jpg"),
//   mcg: require("../assets/events/mcg.jpg"),
//   ahmedabad: require("../assets/events/ahmedabad.webp"),
//   cricket: require("../assets/events/cricket.jpg"),
//   party: require("../assets/events/newYear.jpg"),
//   festivals: require("../assets/events/cristmas2.jpg"),
//   food: require("../assets/events/food.jpg"),
//   celebrations: require("../assets/events/diwali.jpg"),
//   concert: require("../assets/events/concert.jpg"),
// };

function CategoryEvent() {
  const [events, setEvents] = useState([]);
  const { CategoryEvent } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2121/api/events/getEventByCategory/${CategoryEvent}`
        );
        setEvents(response.data.data);
        console.log(response.data.data);
        
        console.log("CategoryEvent param:", CategoryEvent);

      } catch (error) {
        console.error("Error fetching events!!!", error);
      }
    };

    fetchEvents();
  }, [CategoryEvent]);


  const handleEventClick = (eventId) => {
    navigate(`/EventDetails/${eventId}`);
  };

  let content;

  if (events.length > 0) {
    content = (
      <div className="row p-3 w-100 m-auto mt-2 justify-content-start">
        {events.map((event) => (
          <div
            key={event.id}
            className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center mb-3"
            onClick={() => handleEventClick(event.id)}
          >
            <div className="event-item">
              {event.event_image && (
                <img src={`http://localhost:2121/uploads/${event.event_image}`} alt={event.event_image} className="event-img" />
              )}

              <div className="d-flex flex-column flex-grow-1">
                <div className="bg-black text-white d-flex align-items-center w-100">
                  {event.event_start_date && event.event_start_time && (
                    <p className="date-time">
                      {event.event_start_date} , {event.event_start_time}
                    </p>
                  )}
                </div>

                {event.event_title && <h5 className="event-name">{event.event_title}</h5>}

                <div className="d-flex align-items-center justify-content-between info">
                  {event.event_location && (
                    <div className="text-start location">
                      <span className="fw-bold text-muted">Location:</span>
                      <br />
                      <span className="text-danger">{event.event_location}</span>
                    </div>
                  )}
                  {event.event_price && (
                    <div className="fw-bold text-danger">Rs.{event.event_price}</div>
                  )}
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
