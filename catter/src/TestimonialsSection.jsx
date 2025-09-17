// src/components/TestimonialsSection.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Rajput",
    text: "A very special day today in our life and this is the second time we booked Taj Taazagi Catters for birthday party and as expected the food and service was extremely well. Multiple varieties and all tastes were awesome. All our guests enjoyed and specially mentioned about food taste. Many thanks to Taj Taazagi Catters. We really enjoyed and also India won today's match... Soo happy. Will definitely refer to all our friends and relatives 😀.",
  },
  {
    name: "Anjali Sharma",
    text: "We had an amazing experience with Taj Taazagi Catters. Their food quality and hospitality are top-notch. Our wedding guests loved every dish and praised the entire arrangement. Highly recommended! 💯",
  },
  {
    name: "Karan Mehta",
    text: "Absolutely fantastic! The catering team handled everything with perfection. From starters to desserts, each dish was mouth-watering. Truly made our event memorable. 🙌",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { name, text } = testimonials[currentIndex];

  return (
    <div
      className="testimonials-container mt-7 w-full h-200 flex justify-between items-center relative flex-row max-md:flex-col bg-[#222222b6] gap-4 pt-5 pr-5 pl-5 bg-no-repeat bg-cover rounded-2xl overflow-hidden"
      style={{ backgroundImage: "url('/assets/testimonialbg-B83X85U4.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#38383889]"></div>

      {/* Left Section */}
      <div className="w-1/2 max-md:w-full relative z-10">
        <h1 className="text-3xl font-bold text-white tracking-widest uppercase">
          Testimonials.
        </h1>
        <h1 className="text-7xl font-bold text-white max-md:text-3xl py-5">
          What People Say About Us?
        </h1>

        <div className="review-text mb-10 min-h-[250px]">
          <p className="text-2xl text-start text-white py-2">{text}</p>
          <h1 className="text-xl font-bold text-white tracking-widest uppercase mt-4">
            {name}
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handlePrev}
            className="cursor-pointer flex justify-center items-center shadow-xl text-lg text-rose-800 bg-white p-2 border-2 rounded-full hover:bg-rose-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer flex justify-center items-center shadow-xl text-2xl text-rose-800 bg-white p-2 border-2 rounded-full hover:bg-rose-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-[400px] h-[630px] max-md:w-full relative z-10">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src="https://tajtaazagicatters.com/assets/testimonial-img-CqfgkfWM.png"
          alt="Testimonial"
        />
      </div>
    </div>
  );
};

export default TestimonialsSection;
