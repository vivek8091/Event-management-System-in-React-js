import { useEffect, useState } from "react";
import "../Styles/eventDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventDetails() {
  const { eventId } = useParams();
  const [selectedEvent, setSelectedEvent] = useState([]);

  useEffect(() => {
    const fetchEventById = async () => {
      try {
        const res = await axios.get(
          `http://localhost:2121/api/events/getEventById/${eventId}`
        );
        console.log(res.data);

        setSelectedEvent(res.data.data);
      } catch (error) {
        console.error("Error while fetching events details!!!");
      }
    };
    fetchEventById();
  }, [eventId]);
  console.log("Selected Event Data:", selectedEvent);

  return (
    
      <div className="container">
        {selectedEvent.map((event, index) => (
          <div key={event.id} className="event-details p-4">
            <img
              src={`http://localhost:2121/uploads/${event.event_image}`}
              alt={event.event_image}
              className="event-img"
            />

            <div className="event-titles">
              <h1>{event.event_title}</h1>
              <button className="btn btn-primary">Book Ticket</button>
            </div>

            <p className="pricings">
              <strong>₹</strong>
              {event.event_price}
            </p>

            <h5 className="timings">When and Where</h5>

            <div className="dates">
              <div className="start-date">
                <div className="date-icon">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className="date-info">
                  <h6>Date and Time</h6>
                  <p>Start Date : {event.event_start_date}</p>
                  <p>Start Time : {event.event_start_time}</p>
                </div>
              </div>
              <div className="end-date"></div>
            </div>

            <div className="location">
              <div className="location-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="location-info">
                <h6>Location</h6>
                <p>{event.event_location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
}

export default EventDetails;
