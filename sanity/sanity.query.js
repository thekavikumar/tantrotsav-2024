import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getEvents() {
  return client.fetch(
    groq`*[_type == "event"]{
      _id,
      eventTitle,
      eventImage {alt, "image": asset->url},
      eventDescription,
      venue,
      firstPrice,
      secondPrice,
      thirdPrice
    }`,
    {
      next: {
        revalidate: 3, // look for updates to revalidate cache every hour
      },
    }
  );
}
