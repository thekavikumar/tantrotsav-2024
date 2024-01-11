import EventCard from "@/components/EventCard";
import { getEvents } from "@/sanity/sanity.query";
import { Toaster } from "react-hot-toast";

export const revalidate = 30;

export default async function Page() {
  const events = await getEvents();

  return (
    <main className="max-w-7xl mx-auto pt-10">
      <Toaster position="bottom-right" />
      {events && (
        <div className="flex flex-wrap gap-6">
          {events.map((event) => (
            <EventCard event={event} key={event._id} btn={"Add to Cart"} />
          ))}
        </div>
      )}
    </main>
  );
}
