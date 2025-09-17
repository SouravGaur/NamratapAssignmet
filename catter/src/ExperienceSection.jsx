import React from "react";
import { Calendar, BookOpen, Users, Smile } from "lucide-react"; // replace icons if needed

const stats = [
  {
    id: 1,
    title: "Years Of Excellence",
    value: "25+",
    icon: (
      <Calendar className="mb-2 text-2xl text-rose-800 group-hover:text-white transition-colors relative z-10 duration-300" />
    ),
    bgIcon: (
      <Calendar className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#ffffffbd] group-hover:rotate-12 transition-transform duration-300" />
    ),
  },
  {
    id: 2,
    title: "Menu Options",
    value: "250+",
    icon: (
      <BookOpen className="mb-2 text-2xl text-rose-800 group-hover:text-white transition-colors relative z-10 duration-300" />
    ),
    bgIcon: (
      <BookOpen className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#ffffffbd] group-hover:rotate-12 transition-transform duration-300" />
    ),
  },
  {
    id: 3,
    title: "Staff",
    value: "340",
    icon: (
      <Users className="mb-2 text-2xl text-rose-800 group-hover:text-white transition-colors relative z-10 duration-300" />
    ),
    bgIcon: (
      <Users className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#ffffffbd] group-hover:rotate-12 transition-transform duration-300" />
    ),
  },
  {
    id: 4,
    title: "Happy Foodies",
    value: "125K",
    icon: (
      <Smile className="mb-2 text-2xl text-rose-800 group-hover:text-white transition-colors relative z-10 duration-300" />
    ),
    bgIcon: (
      <Smile className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-[#ffffffbd] group-hover:rotate-12 transition-transform duration-300" />
    ),
  },
];

export default function ExperienceSection() {
  return (
    <div className="p-4 mt-8">
      {/* Heading */}
      <p className="text-4xl font-semibold mb-2 uppercase tracking-widest text-rose-800 my-4">
        Experience....
      </p>

      {/* Stats Grid */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="w-full p-4 py-8 rounded-xl border-[1px] border-slate-300 relative overflow-hidden group bg-white"
          >
            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-800 to-rose-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300"></div>

            {/* Background big icon */}
            {stat.bgIcon}

            {/* Foreground small icon */}
            {stat.icon}

            {/* Title */}
            <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
              {stat.title}
            </h3>

            {/* Value */}
            <p className="text-[#222222] font-extrabold text-2xl group-hover:text-white relative z-10 duration-300">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
