"use client";
import EventCard from "@/components/EventCard";
import Pricing from "@/components/Pricing";
import { useUserDetails, useUserTier } from "@/context/zustand";
import { db } from "@/firebase";
import axios from "axios";
import { get, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export const revalidate = 0;

export default async function Page() {
  const [tier, setTier] = useState(false);
  const { user } = useUserDetails();
  const userId = user?.uid;
  const query = encodeURIComponent(`*[_type == "event"]`);
  const userTierRef = ref(db, "users/" + userId + "/tier");
  const { userTier } = useUserTier();
  const events = await fetch(
    `https://hgcsqmwr.api.sanity.io/v2022-03-07/data/query/production?query=${query}`
  )
    .then((response) => response.json())
    .then((data) => data.result);

  return (
    <main className="max-w-7xl mx-auto pt-28">
      {!userTier ? (
        <Pricing setTier={setTier} />
      ) : (
        events && (
          <div className="flex flex-wrap gap-6">
            {events.map((event) => (
              <EventCard event={event} key={event._id} />
            ))}
          </div>
        )
      )}
    </main>
  );
}
