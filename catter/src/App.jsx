import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { ChevronDown, Menu } from "lucide-react";
import TypingEffect from "./TypingEffect";
import ServicesSection from "./ServicesSection";
import WhyChooseUs from "./WhyChooseUs";
import CateringCorner from "./CateringCorner";
import WeddingDestination from "./WeddingDestination";
import TestimonialsSection from "./TestimonialsSection";
import ExperienceSection from "./ExperienceSection";
import ScrollingEvents from "./ScrollingEvents";
import Footer from "./Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const fullText = "Elevating Your Events with Exceptional Food";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 150); // typing speed in ms

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="sticky top-0 left-0 right-0  z-50 bg-white border-b border-gray-100 shadow-lg">
        <div className="max-w-full mx-auto px-4 sm:px-6 h-20 lg:px-4">
          <div className="flex justify-between text-xl items-center h-22">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2 h-23 w-22 mt-2">
              <img
                className="rounded-full scale-110"
                src="https://tajtaazagicatters.com/assets/logoCircle-fP27se6m.png"
                alt="logo"
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-rose-800 px-3 py-2 text-md font-medium transition-all duration-200 relative group after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gray-900 after:transition-transform after:duration-300 hover:after:scale-x-100 text-lg"
                  >
                    {item}
                  </a>
                )
              )}

              {/* Dropdown Menu */}
              <div className="relative group">
                <button className="flex items-center text-2xl space-x-1 text-gray-900 hover:text-rose-800 px-3 py-2 text-md font-medium">
                  Menu{" "}
                  <ChevronDown className="h-4 w-4 text-xl transition-transform duration-200 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-2 w-56 origin-top-left transition-all duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white py-2 shadow-lg rounded-md">
                    {[
                      { label: "Wedding Menu", href: "/weddingmenu" },
                      { label: "Anniversary Menu", href: "/anniversarymenu" },
                      { label: "Birthday Menu", href: "/birthdaymenu" },
                      { label: "Corporate Events", href: "/corporatemenu" },
                      {
                        label: "Special Occasions",
                        href: "/specialoccasionmenu",
                      },
                      { label: "Seasonal Specials", href: "/seasonalmenu" },
                    ].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-800 hover:text-white transition-colors duration-150"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <div className="hidden lg:flex items-center justify-center space-x-4">
              <a
                href="tel:+91 9084153502"
                className="inline-flex items-center justify-center px-7 py-3 border border-transparent  font-medium rounded-full text-white bg-rose-800 hover:bg-rose-700 transition-colors duration-200 text-lg mb-2"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-rose-900 hover:bg-rose-100 transition-colors duration-200"
              >
                <Menu className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Services", "Gallery", "Blog", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-rose-800 rounded-md transition-colors duration-150"
                  >
                    {item}
                  </a>
                )
              )}

              {/* Mobile Dropdown */}
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-rose-800 rounded-md transition-colors duration-150"
              >
                Menu
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen && (
                <div className="pl-4 space-y-1">
                  {[
                    { label: "Wedding Menu", href: "/weddingmenu" },
                    { label: "Anniversary Menu", href: "/anniversarymenu" },
                    { label: "Birthday Menu", href: "/birthdaymenu" },
                    { label: "Corporate Events", href: "/corporatemenu" },
                    {
                      label: "Special Occasions",
                      href: "/specialoccasionmenu",
                    },
                    { label: "Seasonal Specials", href: "/seasonalmenu" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-rose-800 rounded-md transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {/* Book Now */}
              <div className="px-3 py-3">
                <a
                  href="tel:+91 9084153502"
                  className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-rose-800 hover:bg-rose-700 transition-colors duration-200"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      <section className="relative bg-[url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?_gl=1*o4209i*_ga*Njk1ODA4NDk4LjE3NTM4NTA0ODU.*_ga_8JE65Q40S6*czE3NTgwODU2NDckbzEzJGcxJHQxNzU4MDg1NjgyJGoyNSRsMCRoMA..')] w-full h-[86vh] flex items-center justify-center  text-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2222228c] bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 w-2/3 max-md:w-full max-md:px-2">
          <h1 className="text-xl tracking-widest  text-white font-bold mb-4">
            Welcome to Taj Taazagi Catters
          </h1>

          <TypingEffect />
          {/* <h2 className="text-3xl text-white font-bold max-md:font-normal max-md:text-xl py-4">
            <span className="inline-block" style={{ fontSize: "2em" }}>
              Savor the Goodness, Celebrate the Flavor!
            </span>
          </h2> */}

          <p className="text-xl text-white font-semibold mb-8">
            We are the top vegetarian wedding caterer in Agra. We have completed
            over 2,000+ weddings, supported by a professional team of 340
            members.
          </p>

          {/* Button */}
          <button
            type="button"
            className="mx-auto mt-6 font-sans cursor-pointer flex justify-center gap-2 items-center shadow-xl text-gray-50 bg-rose-800 backdrop-blur-md lg:font-semibold relative z-10 px-5 py-3 overflow-hidden text-xl border-2 rounded-full hover:bg-rose-700 transition"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 bg-gray-50 text-gray-50 rounded-full border border-gray-700 p-2 rotate-45"
            >
              <path
                className="fill-rose-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              />
            </svg>
          </button>
        </div>
      </section>
      <ServicesSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Catering Story */}
      <CateringCorner />
      <WeddingDestination />

      {/* Testimonials */}

      <TestimonialsSection />

      {/* Stats Section */}
      <ExperienceSection />
      {/* scroll */}
      <ScrollingEvents />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
