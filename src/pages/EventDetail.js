import React from "react";
import { useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();
  console.log(data);
  // console.log(JSON.stringify(data));

  return (
    <>
      <EventItem event={data.event}></EventItem>
    </>
  );
}

export default EventDetailPage;

export async function loader({ params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    return json({ message: "Could not fetch details for selected event." }, { status: 500 });
  } else {
    // console.log(response);
    return response;
  }
}
