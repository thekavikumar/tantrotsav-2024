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
      firstPrice,
      secondPrice,
      thirdPrice,
      clubImage {alt, "image": asset->url},
      club
    }`,
    { cache: "no-store" }
  );
}
