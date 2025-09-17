import React, { useEffect, useState } from "react";

export default function TypingEffect() {
  const fullText = "Savor the Goodness, Celebrate the Flavor!";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150; // delete faster, type slower

    const handleTyping = () => {
      if (!isDeleting && index < fullText.length) {
        // typing forward
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        // deleting backward
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else if (index === fullText.length) {
        // pause at full text before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        // pause at empty before typing again
        setIsDeleting(false);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <h2 className="text-6xl text-white font-bold max-md:text-xl mb-5 py-4">
      {displayedText}
      <span className="animate-pulse">|</span> {/* blinking cursor */}
    </h2>
  );
}
