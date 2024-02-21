"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

export const revalidate = 0;

export default function Page() {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchEvents() {
      const query = encodeURIComponent(`*[_type == "event"]`);
      const response = await fetch(
        `https://hgcsqmwr.api.sanity.io/v2022-03-07/data/query/production?query=${query}`
      );
      const data = await response.json();
      setEvents(data.result || []);
    }

    fetchEvents();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <main className="max-w-7xl mx-auto pt-28">
      <div className="flex z-50 md:relative items-center justify-center md:justify-end mb-5 -ml-2 gap-3">
        <h1 className="font-medium text-lg">Choose Filter:</h1>
        <select
          className="border border-gray-300 bg-white text-black rounded px-3 py-1"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          <option value="Technical">Technical</option>
          <option value="Non-Technical">Non Technical</option>
          <option value="Workshop">Workshop</option>
          <option value="Show">Show</option>
        </select>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 pb-4">
        {events
          .filter((event) =>
            filter === "all" ? true : event.typeOfEvent === filter
          )
          .map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
      </div>
    </main>
  );
}
