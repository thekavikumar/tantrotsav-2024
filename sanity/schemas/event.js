// schemas/event.js

import { defineField } from "sanity";

const event = {
  name: "event",
  title: "Create Event",
  type: "document",
  fields: [
    defineField({
      name: "eventTitle",
      title: "Event Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventDescription",
      title: "Event Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "venue",
      title: "Event Venue",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "registrationFee",
      title: "Registration Fee",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "firstPrice",
      title: "FirstPrice",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "secondPrice",
      title: "SecondPrice",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thirdPrice",
      title: "ThirdPrice",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "club",
      title: "Club Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "eventImage",
      title: "Event Image",
      type: "image",
      description: "Upload a event image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "clubImage",
      title: "Club Image",
      type: "image",
      description: "Upload a club image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default event;
