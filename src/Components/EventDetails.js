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
      <div className="container mt-4">
        <div className="event-details p-4 shadow rounded">
          <h2>{selectedEvent.name}</h2>

          {selectedEvent.image && (
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="event-img"
            />
          )}

          <p>
            <strong>Start Date:</strong> {selectedEvent.date} <br />
            <strong>Time:</strong> {selectedEvent.time} <br />
            <strong>Location:</strong> {selectedEvent.location} <br />
            <strong>Price:</strong> Rs.{selectedEvent.price}
          </p>

          <button className="btn btn-primary">Book Ticket</button>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
