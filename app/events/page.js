import EventCard from "@/components/EventCard";

export const revalidate = 0;

export default async function Page() {
  const query = encodeURIComponent(`*[_type == "event"]`);
  const events = await fetch(
    `https://hgcsqmwr.api.sanity.io/v2022-03-07/data/query/production?query=${query}`
  )
    .then((response) => response.json())
    .then((data) => data.result);
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
