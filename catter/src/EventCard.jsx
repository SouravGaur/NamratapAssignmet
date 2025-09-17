import React from "react";
import { motion } from "framer-motion";

/**
 * EventCard
 * Props:
 *  - imageSrc: string (image url)
 *  - title: string
 *  - description: string
 *  - className?: string (additional container classes)
 */
export default function EventCard({
  imageSrc = "/assets/Wedding-FPK-twGz.avif",
  title = "Wedding Event",
  description = `Wedding. Why we have the concept of inviting all our relatives, friends and known ones? Its because, when a family celebrates an event means, its an occasion, when lot of people celebrates an event means, it turns as a feast. If there any feast occurs without food?? We are here to make a memorable experience for your guests by pampering their taste buds.`,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`w-1/2 min-h-80 bg-gray-100 max-md:w-full rounded-2xl overflow-hidden ${className}`}
    >
      <div className="w-full h-68 overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-125 transition-transform duration-700"
        />
      </div>

      <div className="p-5">
        <h1 className="text-xl font-bold text-rose-800 tracking-widest uppercase">
          {title}
        </h1>

        <p className="text-lg text-start text-[#222222] py-5">{description}</p>
      </div>
    </motion.div>
  );
}
