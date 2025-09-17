// src/components/WhyChooseUs.jsx
import React from "react";

const reasons = [
  {
    title: "Authentic Taste",
    img: "https://tajtaazagicatters.com/assets/n1-BYETs9i8.png",
    description:
      "Enjoy our traditional recipes, inspired by rich culinary heritage.",
  },
  {
    title: "Service Excellence",
    img: "https://tajtaazagicatters.com/assets/n2-LlQ3Hw7s.png",
    description: "Outstanding service and unforgettable experiences.",
  },
  {
    title: "Best Quality",
    img: "https://tajtaazagicatters.com/assets/n3-BhSNczpX.png",
    description: "Top quality standards, excellence in every bite.",
  },
  {
    title: "Heritage",
    img: "https://tajtaazagicatters.com/assets/n4-DZ0m13Q8.png",
    description:
      "Taj Taazagi Catters blends food and heart, rooted in family traditions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mt-19 p-5">
      {/* Header */}
      <div className="w-2/3 max-md:w-full mx-auto">
        <h1 className="text-2xl text-center font-bold  text-rose-800 tracking-widest uppercase">
          Why Choose Us
        </h1>
        <h2 className="text-4xl text-center font-bold text-[#222222] max-md:text-3xl py-5">
          Leave Your Guests Speechless With Our Fabulous Food!
        </h2>
        <p className="text-xl text-center text-[#222222] py-3 mb-5">
          We are a full-service catering company that specializes in creating
          custom menus that are tailored to your specific needs and budget. Our
          team of professionals will work with you to create a menu that is
          perfect for your event.
        </p>
      </div>

      {/* Cards */}
      <div className="flex justify-around flex-row max-md:flex-col gap-2 pt-2">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="max-md:h-52 min-h-45  shadow-sm text-center rounded-md bg-white p-7"
            data-aos="flip-up"
          >
            <img src={reason.img} alt={reason.title} className="w-20 mx-auto" />
            <h3 className="text-[#222222] text-2xl font-semibold py-2">
              {reason.title}
            </h3>
            <p className="text-[#222222] text-lg font-semibold">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
