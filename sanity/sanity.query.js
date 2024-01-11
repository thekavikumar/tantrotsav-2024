import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getEvents() {
<<<<<<< HEAD
  return await client.fetch(
    groq`*[_type == "event"]{
=======
	return client.fetch(
		groq`*[_type == "event"]{
>>>>>>> 40a80788abe5d3b87e22dd7a799e1a9a525c6c0b
      _id,
      eventTitle,
      eventImage {alt, "image": asset->url},
      eventDescription,
      venue,
      firstPrice,
      secondPrice,
      thirdPrice,
<<<<<<< HEAD
      clubImage {alt, "image": asset->url},
      club
    }`,
    { cache: "no-store" }
  );
=======
      club,
      clubImage {alt, "image": asset->url},
    }`,
		{ cache: "no-store" }
	);
>>>>>>> 40a80788abe5d3b87e22dd7a799e1a9a525c6c0b
}
