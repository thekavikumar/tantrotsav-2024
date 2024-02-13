"use client";
import EventCard from "@/components/EventCard";
import { getEventById } from "@/sanity/sanity.query";
import React from "react";

async function Page({ params }) {
  const event = await getEventById(params.event);
  return <EventCard event={event} />;
}

export default Page;
