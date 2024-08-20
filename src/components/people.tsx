"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Urvashi.",
    designation: "FullStack Dev",
    image: "https://avatars.githubusercontent.com/u/87687828?v=4",
  },
  {
    id: 2,
    name: "Harshita",
    designation: "Designer, 3D Artist",
    image:
      "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yaloxMEFHaXg0bTllS0VXeUg0VHRjSDhId2oifQ",
  },
  {
    id: 3,
    name: "Yash",
    designation: "FullStack Dev",
    image:
      "https://avatars.githubusercontent.com/u/114144836?s=400&u=b6e489363b59e9cb5e6bff71f1c86b1e503c355e&v=4",
  },
  {
    id: 4,
    name: "Rachit",
    designation: "FullStack Dev",
    image: "https://avatars.githubusercontent.com/u/70265590?v=4",
  },
  {
    id: 5,
    name: "Rakesh",
    designation: "Web3 Developer",
    image:
      "https://raw.githubusercontent.com/yash-raj10/bookmart/b933e9c848fc4e7b7e7c5db04f951963e5f59a49/public/photo_2024-06-30_21-40-25.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-4 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
