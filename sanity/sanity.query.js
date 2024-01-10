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
      thirdPrice,
      club,
      clubImage {alt, "image": asset->url},
    }`,
		{ cache: "no-store" }
	);
}
