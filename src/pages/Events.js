import React from "react";
import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "e1 - Woodstock" },
  { id: "e2", title: "e2 - Poland Rock" },
  { id: "e3", title: "e3 - Jarocin" },
  { id: "e4", title: "e4 - Opener" },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
