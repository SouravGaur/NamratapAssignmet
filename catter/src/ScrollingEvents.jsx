import React from "react";

const events = [
  "Wedding",
  "Anniversary",
  "Engagement",
  "Seemantham",
  "Annaprasana",
  "Birthday",
  "Mehndi",
  "Corporate",
  "Retirement",
  "House Warming",
  "Reception",
  "Naming Ceremony",
];

export default function ScrollingEvents() {
  // Duplicate list for infinite scroll illusion
  const scrollingEvents = [...events, ...events];

  return (
    <div className="scroll-container overflow-hidden mt-12  mb-0">
      <ul className="scroll-list h-15 bg-rose-800 text-white text-xl max-md:text-sm p-2 flex">
        {scrollingEvents.map((event, index) => (
          <div key={index} className="flex items-center">
            <li className="mr-4">{event}</li>
            <div className="w-2 h-2 rounded-full bg-white mr-1"></div>
          </div>
        ))}
      </ul>

      {/* Custom CSS for animation */}
      <style>
        {`
          .scroll-container {
            overflow: hidden;
            white-space: nowrap;
          }
          .scroll-list {
            display: inline-flex;
            animation: scroll 20s linear infinite;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}
