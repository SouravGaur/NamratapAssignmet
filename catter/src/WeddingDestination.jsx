// src/components/WeddingDestination.jsx
import React from "react";

export default function WeddingDestination() {
  return (
    <section className="flex justify-between flex-row gap-8 max-md:flex-col p-5 mt-7">
      {/* Left Side - Text Content */}
      <div className="w-1/2 max-md:w-full p-5">
        <h1 className="text-3xl font-bold text-rose-800 tracking-widest uppercase">
          Wedding Destination.
        </h1>
        <h2 className="text-4xl font-bold text-[#222222] tracking-widest uppercase py-5">
          Story
        </h2>
        <p className="text-2xl text-start text-[#222222]">
          Planning a dreamy destination wedding? Let us help with smart tips and
          services for a smooth, stress-free celebration! 🌍💍
        </p>
        <p className="text-2xl text-start mb-5 text-[#222222] py-2">
          Dreaming of a perfect destination wedding? ✨ From planning to
          execution, we’ve got you covered with smart tips and services. Enjoy a
          seamless, stress-free celebration in your dream location! 💍🌍
        </p>
        <button
          type="button"
          className="font-sans cursor-pointer flex mt-2 py-4 px-7 justify-center gap-2 items-center mx-auto shadow-xl text-2xl text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 overflow-hidden border-2 rounded-full transition-all duration-300 hover:bg-rose-700"
        >
          Read More
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="w-1/2 max-md:w-full overflow-hidden rounded-3xl">
        <img
          src="https://images.pexels.com/photos/10744427/pexels-photo-10744427.jpeg?_gl=1*1h6ts97*_ga*Njk1ODA4NDk4LjE3NTM4NTA0ODU.*_ga_8JE65Q40S6*czE3NTgxMjExMTIkbzE2JGcxJHQxNzU4MTIxMTQ1JGoyNyRsMCRoMA.."
          alt="Wedding Destination"
          className="hover:scale-125 duration-300 transition-transform"
        />
      </div>
    </section>
  );
}
