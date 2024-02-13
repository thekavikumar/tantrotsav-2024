import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getEvents() {
  return await client.fetch(
    groq`*[_type == "event"]{
      _id,
      eventTitle,
      eventImage {alt, "image": asset->url},
      eventDescription,
      venue,
      registrationFee,
      firstPrice,
      secondPrice,
      thirdPrice,
      club,
      clubImage {alt, "image": asset->url},
    }`
  );
}

export async function getEventById(eventId) {
  return await client.fetch(
    groq`*[_type == "event" && _id == $eventId]{
      _id,
      eventTitle,
      eventImage {alt, "image": asset->url},
      eventDescription,
      venue,
      registrationFee,
      firstPrice,
      secondPrice,
      thirdPrice,
      club,
      clubImage {alt, "image": asset->url},
    }`,
    { eventId }
  );
}
