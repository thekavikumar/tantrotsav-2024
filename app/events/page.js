"use client";
import EventCard from "@/components/EventCard";
import { useUserDetails } from "@/context/zustand";

export const revalidate = 0;

export default async function Page() {
  const { user } = useUserDetails();
  const query = encodeURIComponent(`*[_type == "event"]`);
  const events = await fetch(
    `https://hgcsqmwr.api.sanity.io/v2022-03-07/data/query/production?query=${query}`
  )
    .then((response) => response.json())
    .then((data) => data.result);

  return (
    <main className="max-w-7xl mx-auto pt-28">
      {events && (
        <div className="flex flex-wrap justify-center items-center gap-6 pb-4">
          {events.map((event) => (
            <EventCard event={event} key={event._id} />
          ))}
        </div>
      )}
    </main>
  );
}
