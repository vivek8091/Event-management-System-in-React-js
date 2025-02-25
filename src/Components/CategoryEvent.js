import { useParams, Link } from "react-router-dom";
import "../Styles/categoryEvent.css";


const catImages = {
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
        name: "IPL 2024",
        image: catImages.cricket,
        description: "Biggest cricket league in India.",
      },
      {
        id: 1,
        name: "IPL 2024",
        image: catImages.cricket,
        description: "Biggest cricket league in India.",
      },
      {
        id: 1,
        name: "IPL 2024",
        image: catImages.cricket,
        description: "Biggest cricket league in India.",
      },
      {
        id: 1,
        name: "IPL 2024",
        image: catImages.cricket,
        description: "Biggest cricket league in India.",
      },
      {
        id: 1,
        name: "IPL 2024",
        image: catImages.cricket,
        description: "Biggest cricket league in India.",
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
    content = events.map((event) => (
      <div key={event.id} className="event-item">
        <img src={event.image} alt={event.name} className="event-img" />
        <h3>{event.name}</h3>
        <p>{event.description}</p>
      </div>
    ));
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
      <div>
        <h1>{CategoryEvent.toUpperCase()}</h1>
        {content}
      </div>
    </>
  );
}

export default CategoryEvent;
