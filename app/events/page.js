import { getEvents } from "@/sanity/sanity.query";
import Image from "next/image";

export default async function Page() {
  const events = await getEvents();
  // console.log(events);
  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      {events && (
        <div className="">
          {events.map((event) => (
            <div className="" key={event._id}>
              <h1>{event.eventTitle}</h1>
              <h1>{event.eventDescription}</h1>
              <h1>{event.venue}</h1>
              <Image
                src={event.eventImage.image}
                height={100}
                width={100}
                alt="image"
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
