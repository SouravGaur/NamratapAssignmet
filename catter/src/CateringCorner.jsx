// src/components/CateringCorner.jsx
import React from "react";

export default function CateringCorner() {
  return (
    <section className="flex justify-between flex-row gap-8 mb-5 max-md:flex-col p-5 mt-10">
      {/* Left Side - Image Collage */}
      <div className="w-1/2 h-[70vh] max-md:w-full overflow-hidden rounded-3xl">
        <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-[#222222b6]">
          <h2 className="relative z-0 text-[20vw] font-black text-white md:text-[50px]">
            Taj Taazagi<span className="text-indigo-500">.</span>
          </h2>

          <div className="absolute inset-0 z-10">
            {/* Wedding */}
            <img
              className="absolute bg-neutral-200 p-1 pb-4 w-52 md:w-56"
              src="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?_gl=1*srrzqn*_ga*Njk1ODA4NDk4LjE3NTM4NTA0ODU.*_ga_8JE65Q40S6*czE3NTgxMTM2NjQkbzE1JGcxJHQxNzU4MTEzNjcxJGo1MyRsMCRoMA.."
              alt="Wedding Event"
              style={{
                top: "5%",
                left: "5%",
                transform: "rotate(6deg)",
              }}
            />
            {/* Birthday */}
            <img
              className="absolute bg-neutral-200 p-1 pb-6 w-49 md:w-48"
              src="https://tajtaazagicatters.com/assets/Birthday-BvsEsdIU.jpg"
              alt="Birthday Party"
              style={{
                top: "5%",
                left: "60%",
                transform: "rotate(10deg)",
              }}
            />
            {/* Engagement */}
            <img
              className="absolute bg-neutral-200 p-1 pb-4 w-52 md:w-80"
              src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?_gl=1*1cz8ejq*_ga*Njk1ODA4NDk4LjE3NTM4NTA0ODU.*_ga_8JE65Q40S6*czE3NTgxMTM2NjQkbzE1JGcxJHQxNzU4MTEzNzMyJGo2MCRsMCRoMA.."
              alt="Engagement"
              style={{
                top: "30%",
                left: "5%",
                transform: "rotate(-6deg)",
              }}
            />
            {/* Mehndi */}
            <img
              className="absolute bg-neutral-200 p-1 pb-4 w-48 md:w-72"
              src="https://tajtaazagicatters.com/assets/Mehndi-C3ZnCSxa.jpg"
              alt="Mehndi Ceremony"
              style={{
                top: "50%",
                left: "40%",
                transform: "rotate(8deg)",
              }}
            />
            {/* Seemantham */}
            <img
              className="absolute bg-neutral-200 p-1 pb-4 w-24 md:w-48"
              src="http://tajtaazagicatters.com/assets/Seemantham-uyqLOHwh.jpg"
              alt="Seemantham"
              style={{
                top: "28%",
                left: "60%",
                transform: "rotate(-3deg)",
              }}
            />
            <img
              className="absolute bg-neutral-200 p-1 pb-4 w-48 md:w-72"
              src="https://tajtaazagicatters.com/assets/Mehndi-C3ZnCSxa.jpg"
              alt="Mehndi Ceremony"
              style={{
                top: "10%",
                left: "30%",
                transform: "rotate(8deg)",
              }}
            />
            <img
              className="absolute bg-neutral-200 p-1 pb-6 w-49 md:w-48"
              src="https://tajtaazagicatters.com/assets/Birthday-BvsEsdIU.jpg"
              alt="Birthday Party"
              style={{
                top: "50%",
                left: "70%",
                transform: "rotate(10deg)",
              }}
            />
            <img
              className="absolute bg-neutral-200 p-1 pb-6 w-49 md:w-48"
              src="https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?_gl=1*10jo6hw*_ga*Njk1ODA4NDk4LjE3NTM4NTA0ODU.*_ga_8JE65Q40S6*czE3NTgxMTM2NjQkbzE1JGcxJHQxNzU4MTEzNzk1JGo1OSRsMCRoMA.."
              alt="Birthday Party"
              style={{
                top: "50%",
                left: "7%",
                transform: "rotate(10deg)",
              }}
            />
          </div>
        </section>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-1/2 max-md:w-full p-5">
        <h1 className="text-3xl font-bold text-rose-800 tracking-widest uppercase">
          Catering Corner.
        </h1>
        <h2 className="text-4xl font-bold text-[#222222] tracking-widest uppercase py-5">
          Story
        </h2>
        <p className="text-2xl text-start text-[#222222]">
          We created just simple bridge between you and Creative Caterer “The
          Catering Corner” and you got the Boom on your event.
        </p>
        <p className="text-2xl text-start text-[#222222] py-2">
          Catering Corner is the place where you can reach the best Caterers aka
          “कैटरर्स” around you, Interact with them, Request for Quote for your
          events and choose which one best suit to your budget that too at no
          cost.
        </p>
        <button
          type="button"
          className="font-sans mt-2 py-3 px-4 cursor-pointer flex justify-center gap-2 items-center mx-auto shadow-xl font-bold text-2xl text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 overflow-hidden border-2 rounded-full"
        >
          Read More
        </button>
      </div>
    </section>
  );
}
