import EventCard from "@/components/EventCard";
import { getEvents } from "@/sanity/sanity.query";

export const revalidate = 30;

export default async function Page() {
  const events = await getEvents();

  return (
    <main className="max-w-7xl mx-auto pt-28">
      {events && (
        <div className="flex flex-wrap gap-6">
          {events.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
        </div>
      )}
    </main>
  );
}
