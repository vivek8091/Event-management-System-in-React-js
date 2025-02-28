import "../Styles/eventDetails.css";
import { useParams } from "react-router-dom";
import { eventData } from "./CategoryEvent";
// import { catImages } from "./CategoryEvent";

function EventDetails() {
  const { eventId } = useParams(); // Get eventId from URL
  let selectedEvent = null;

  Object.values(eventData).forEach((category) => {
    const foundEvent = category.find(
      (event) => event.id.toString() === eventId
    );
    if (foundEvent) selectedEvent = foundEvent;
  });

  if (!selectedEvent) {
    return <p>Event not found</p>;
  }

  return (
    <>
      <div className="container">
        <div className="event-details p-4">
          {selectedEvent.image && (
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="event-img"
            />
          )}

          <div className="event-titles">
            <h1>{selectedEvent.name}</h1>
            <button className="btn btn-primary">Book Ticket</button>
          </div>

          <p className="pricings">
            <strong>₹</strong>
            {selectedEvent.price}
          </p>

          <h5 className="timings">When and Where</h5>

          <div className="dates">
            <div className="start-date">
              <div className="date-icon">
                <i class="fa-solid fa-calendar-days"></i>
              </div>
              <div className="date-info">
                <h6>Date and Time</h6>
                <p>Start Date : {selectedEvent.date}</p>
                <p>Start Time : {selectedEvent.time}</p>
              </div>
            </div>
            <div className="end-date"></div>
          </div>

          <div className="location">
            <div className="location-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="location-info">
              <h6>Location</h6>
              <p>{selectedEvent.location}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
